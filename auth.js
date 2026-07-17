const familyAuthKey = "polisettyFamilyAuth";
const pendingEmailKey = "polisettyPendingEmail";
const authBody = document.body;
const authSection = document.querySelector("#siteAuth");
const authForm = document.querySelector("#authForm");
const authMethods = document.querySelectorAll(".auth-method");
const authContact = document.querySelector("#authContact");
const authContactLabel = document.querySelector("#authContactLabel");
const authContactError = document.querySelector("#authContactError");
const otpSection = document.querySelector("#otpSection");
const authOtp = document.querySelector("#authOtp");
const otpHint = document.querySelector("#otpHint");
const authOtpError = document.querySelector("#authOtpError");
const authSubmit = document.querySelector("#authSubmit");
const recaptchaContainer = document.querySelector("#recaptchaContainer");
const siteMenu = document.querySelector("#siteMenu");
const siteMenuToggle = document.querySelector("#siteMenuToggle");
const siteMenuPanel = document.querySelector("#siteMenuPanel");
const siteInfoToast = document.querySelector("#siteInfoToast");
const logoutButtons = document.querySelectorAll("[data-auth-logout]");
const menuActionButtons = document.querySelectorAll("[data-menu-action]");
const inactivityLimitMs = 10 * 60 * 1000;
const invalidMobileNumbers = new Set([
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
  "1234567890",
  "0123456789",
]);

let authMethod = "email";
let otpSent = false;
let inactivityTimer = 0;
let toastTimer = 0;
let pendingContact = "";
let pendingPhone = "";
let confirmationResult = null;
let recaptchaVerifier = null;

const firebaseSettings = window.POLISETTY_FIREBASE || {};
const firebaseReady = Boolean(
  window.firebase &&
  firebaseSettings.apiKey &&
  firebaseSettings.authDomain &&
  firebaseSettings.projectId &&
  !firebaseSettings.apiKey.includes("YOUR-") &&
  !firebaseSettings.authDomain.includes("YOUR-") &&
  !firebaseSettings.projectId.includes("YOUR-")
);

const phoneCountryCode = firebaseSettings.phoneCountryCode || "+91";
const firebaseAuth = firebaseReady ? initializeFirebaseAuth() : null;

function initializeFirebaseAuth() {
  if (!window.firebase.apps.length) {
    window.firebase.initializeApp(firebaseSettings);
  }
  const auth = window.firebase.auth();
  auth.useDeviceLanguage();
  return auth;
}

function showProtectedSite() {
  authBody.classList.remove("auth-pending", "auth-locked");
  authBody.classList.add("auth-ready");
  if (authSection) authSection.hidden = true;
  closeSiteMenu();
  startInactivityTimer();
}

function showSignIn() {
  authBody.classList.remove("auth-pending", "auth-ready");
  authBody.classList.add("auth-locked");
  if (authSection) authSection.hidden = false;
  closeSiteMenu();
  stopInactivityTimer();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function validMobile(value) {
  return /^\d{10}$/.test(value) && !invalidMobileNumbers.has(value);
}

function formatPhone(value) {
  return `${phoneCountryCode}${value.trim()}`;
}

function currentContactValid() {
  const value = authContact.value.trim();
  if (authMethod === "email") return validEmail(value);
  return validMobile(value);
}

function resetOtp() {
  otpSent = false;
  pendingContact = "";
  pendingPhone = "";
  confirmationResult = null;
  authOtp.value = "";
  otpSection.hidden = true;
  otpSection.style.display = "none";
  otpHint.textContent = "";
  authOtpError.textContent = "";
  authSubmit.textContent = authMethod === "email" ? "Send Sign-In Link" : "Send OTP";
}

function closeSiteMenu() {
  if (!siteMenuToggle || !siteMenuPanel) return;
  siteMenuToggle.setAttribute("aria-expanded", "false");
  siteMenuPanel.hidden = true;
}

function toggleSiteMenu() {
  if (!siteMenuToggle || !siteMenuPanel) return;
  const nextOpen = siteMenuPanel.hidden;
  siteMenuPanel.hidden = !nextOpen;
  siteMenuToggle.setAttribute("aria-expanded", String(nextOpen));
}

function showSiteToast(message) {
  if (!siteInfoToast) return;
  window.clearTimeout(toastTimer);
  siteInfoToast.textContent = message;
  siteInfoToast.classList.add("show");
  toastTimer = window.setTimeout(() => {
    siteInfoToast.classList.remove("show");
  }, 4200);
}

function resetAuthForm() {
  authContactError.textContent = "";
  authOtpError.textContent = "";
  resetOtp();
  setMethod("email");
}

async function logoutUser(reason = "") {
  localStorage.removeItem(familyAuthKey);
  localStorage.removeItem(pendingEmailKey);
  if (firebaseAuth) await firebaseAuth.signOut();
  resetAuthForm();
  showSignIn();
  if (reason) showSiteToast(reason);
}

function stopInactivityTimer() {
  window.clearTimeout(inactivityTimer);
  inactivityTimer = 0;
}

function startInactivityTimer() {
  stopInactivityTimer();
  inactivityTimer = window.setTimeout(() => {
    logoutUser("You have been signed out because the page was inactive for 10 minutes.");
  }, inactivityLimitMs);
}

function recordActivity() {
  if (!authBody.classList.contains("auth-ready")) return;
  startInactivityTimer();
}

function setMethod(method) {
  authMethod = method;
  authMethods.forEach((button) => {
    button.classList.toggle("active", button.dataset.authMethod === method);
  });
  authContact.value = "";
  authContactError.textContent = "";
  authContact.type = method === "email" ? "email" : "tel";
  authContact.inputMode = method === "email" ? "email" : "numeric";
  authContact.autocomplete = method === "email" ? "email" : "tel";
  authContact.placeholder = method === "email" ? "name@example.com" : "10 digit mobile number";
  authContactLabel.textContent = method === "email" ? "Email Address" : "Mobile Number";
  resetOtp();
  authContact.focus();
}

function firebaseErrorMessage(error) {
  const code = error?.code || "";
  if (code === "auth/invalid-email") return "Invalid email address.";
  if (code === "auth/invalid-phone-number") return "Invalid mobile number.";
  if (code === "auth/too-many-requests") return "Too many attempts. Please try again later.";
  if (code === "auth/unauthorized-domain") {
    return "This website domain is not authorized in Firebase Authentication settings.";
  }
  if (code === "auth/operation-not-allowed") {
    return "This sign-in method is not enabled in Firebase Authentication.";
  }
  if (code === "auth/invalid-verification-code") return "Invalid OTP.";
  if (code === "auth/missing-verification-code") return "Enter the 6 digit OTP.";
  if (code === "auth/network-request-failed") return "Network error. Please check internet access and Firebase settings.";
  return error?.message || "Authentication failed. Please try again.";
}

function getActionCodeSettings() {
  const cleanPath = window.location.pathname.endsWith("/")
    ? `${window.location.pathname}index.html`
    : window.location.pathname;
  return {
    url: `${window.location.origin}${cleanPath}`,
    handleCodeInApp: true,
  };
}

async function sendEmailLink() {
  authSubmit.disabled = true;
  authSubmit.textContent = "Sending Link...";
  pendingContact = authContact.value.trim();

  try {
    await firebaseAuth.sendSignInLinkToEmail(pendingContact, getActionCodeSettings());
    localStorage.setItem(pendingEmailKey, pendingContact);
    otpHint.textContent = "A secure sign-in link has been sent to your email. Open that link to enter the family tree.";
    otpSection.hidden = false;
    otpSection.style.display = "";
    authOtp.closest(".auth-field").hidden = true;
    authSubmit.textContent = "Sign-In Link Sent";
    authSubmit.disabled = true;
  } catch (error) {
    console.error("Polisetty Firebase email sign-in failed", error);
    authContactError.textContent = firebaseErrorMessage(error);
    authSubmit.textContent = "Send Sign-In Link";
    authSubmit.disabled = false;
    authContact.focus();
  }
}

function ensureRecaptchaVerifier() {
  if (recaptchaVerifier || !recaptchaContainer) return recaptchaVerifier;
  recaptchaVerifier = new window.firebase.auth.RecaptchaVerifier(recaptchaContainer, {
    size: "invisible",
    callback: () => {},
  });
  return recaptchaVerifier;
}

async function sendMobileOtp() {
  authSubmit.disabled = true;
  authSubmit.textContent = "Sending OTP...";
  pendingContact = authContact.value.trim();
  pendingPhone = formatPhone(pendingContact);

  try {
    confirmationResult = await firebaseAuth.signInWithPhoneNumber(pendingPhone, ensureRecaptchaVerifier());
    otpSent = true;
    authOtp.closest(".auth-field").hidden = false;
    otpSection.hidden = false;
    otpSection.style.display = "";
    authSubmit.textContent = "Verify and Sign In";
    otpHint.textContent = "OTP has been sent to the entered mobile number.";
    authOtp.focus();
  } catch (error) {
    console.error("Polisetty Firebase mobile OTP failed", error);
    authContactError.textContent = firebaseErrorMessage(error);
    resetOtp();
    authSubmit.disabled = false;
    authContact.focus();
  }
}

async function issueOtp() {
  if (!firebaseAuth) {
    authContactError.textContent = "Firebase Authentication is not connected yet. Please add Firebase config in firebase-config.js.";
    return;
  }

  if (authMethod === "email") {
    await sendEmailLink();
    return;
  }

  await sendMobileOtp();
}

function authorizeUser(user) {
  localStorage.setItem(
    familyAuthKey,
    JSON.stringify({
      authorized: true,
      method: authMethod,
      contact: user?.email || user?.phoneNumber || pendingContact || authContact.value.trim(),
      signedInAt: new Date().toISOString(),
      userId: user?.uid || "",
    })
  );
  showProtectedSite();
}

async function verifyOtp() {
  if (!firebaseAuth || !confirmationResult) {
    authOtpError.textContent = "OTP verification is not ready. Please request OTP again.";
    return;
  }

  const token = authOtp.value.trim();
  if (!/^\d{6}$/.test(token)) {
    authOtpError.textContent = "Enter the 6 digit OTP.";
    authOtp.focus();
    return;
  }

  authSubmit.disabled = true;
  authSubmit.textContent = "Verifying...";

  try {
    const result = await confirmationResult.confirm(token);
    authSubmit.disabled = false;
    authorizeUser(result.user);
  } catch (error) {
    console.error("Polisetty Firebase OTP verification failed", error);
    authSubmit.disabled = false;
    authSubmit.textContent = "Verify and Sign In";
    authOtpError.textContent = firebaseErrorMessage(error);
    authOtp.focus();
  }
}

async function finishEmailLinkSignIn() {
  if (!firebaseAuth || !firebaseAuth.isSignInWithEmailLink(window.location.href)) return false;

  const email = localStorage.getItem(pendingEmailKey);
  if (!email) {
    showSignIn();
    authContactError.textContent = "Please enter your email again to complete sign-in.";
    return true;
  }

  try {
    const result = await firebaseAuth.signInWithEmailLink(email, window.location.href);
    localStorage.removeItem(pendingEmailKey);
    window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    authorizeUser(result.user);
  } catch (error) {
    console.error("Polisetty Firebase email link verification failed", error);
    showSignIn();
    authContactError.textContent = firebaseErrorMessage(error);
  }
  return true;
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  authContactError.textContent = "";
  authOtpError.textContent = "";

  if (!currentContactValid()) {
    authContactError.textContent = authMethod === "email" ? "Invalid email address." : "Invalid mobile number.";
    authContact.focus();
    return;
  }

  if (!otpSent) {
    await issueOtp();
    return;
  }

  await verifyOtp();
}

async function initializeAuth() {
  if (!firebaseAuth) {
    localStorage.removeItem(familyAuthKey);
    showSignIn();
    authContactError.textContent = "Firebase Authentication is not connected yet. Please add your Firebase project settings.";
    return;
  }

  const handledEmailLink = await finishEmailLinkSignIn();
  if (handledEmailLink) return;

  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      authorizeUser(user);
    } else {
      localStorage.removeItem(familyAuthKey);
      showSignIn();
    }
  });
}

if (authSection && authForm) {
  siteMenuToggle?.addEventListener("click", toggleSiteMenu);
  document.addEventListener("click", (event) => {
    if (!siteMenu || siteMenu.contains(event.target)) return;
    closeSiteMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSiteMenu();
  });
  logoutButtons.forEach((button) => {
    button.addEventListener("click", () => logoutUser());
  });
  menuActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.menuAction === "about") {
        showSiteToast("Polisetty Family History is a private family space created to preserve names, relationships, memories, and legacy across generations.");
      }
      closeSiteMenu();
    });
  });
  ["click", "keydown", "mousemove", "scroll", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, recordActivity, { passive: true });
  });
  authMethods.forEach((button) => {
    button.addEventListener("click", () => setMethod(button.dataset.authMethod));
  });
  authContact.addEventListener("input", () => {
    if (authMethod === "mobile") authContact.value = authContact.value.replace(/\D/g, "").slice(0, 10);
    authContactError.textContent = "";
    resetOtp();
  });
  authOtp.addEventListener("input", () => {
    authOtp.value = authOtp.value.replace(/\D/g, "").slice(0, 6);
    authOtpError.textContent = "";
  });
  authForm.addEventListener("submit", handleAuthSubmit);

  initializeAuth();
}
