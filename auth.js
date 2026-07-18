const familyAuthKey = "polisettyFamilyAuth";
const pendingEmailKey = "polisettyPendingEmail";
const authBody = document.body;
const authSection = document.querySelector("#siteAuth");
const authForm = document.querySelector("#authForm");
const authContact = document.querySelector("#authContact");
const authContactLabel = document.querySelector("#authContactLabel");
const authContactError = document.querySelector("#authContactError");
const emailSuggestions = document.querySelector("#emailSuggestions");
const otpSection = document.querySelector("#otpSection");
const authOtp = document.querySelector("#authOtp");
const authOtpField = authOtp?.closest(".auth-field");
const otpHint = document.querySelector("#otpHint");
const authOtpError = document.querySelector("#authOtpError");
const authSubmit = document.querySelector("#authSubmit");
const googleSignInButton = document.querySelector("#googleSignInButton");
const siteMenu = document.querySelector("#siteMenu");
const siteMenuToggle = document.querySelector("#siteMenuToggle");
const siteMenuPanel = document.querySelector("#siteMenuPanel");
const siteInfoToast = document.querySelector("#siteInfoToast");
const logoutButtons = document.querySelectorAll("[data-auth-logout]");
const menuActionButtons = document.querySelectorAll("[data-menu-action]");
const feedbackForm = document.querySelector("#feedbackForm");
const feedbackStatus = document.querySelector("#feedbackStatus");
const feedbackImprovements = document.querySelector("#feedbackImprovements");
const feedbackSuggestions = document.querySelector("#feedbackSuggestions");
const improvementCount = document.querySelector("#improvementCount");
const suggestionCount = document.querySelector("#suggestionCount");
const inactivityLimitMs = 10 * 60 * 1000;

let inactivityTimer = 0;
let toastTimer = 0;
let pendingContact = "";

const emailDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com"];

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

const firebaseAuth = firebaseReady ? initializeFirebaseAuth() : null;
const firebaseDb = firebaseReady && window.firebase.firestore ? window.firebase.firestore() : null;

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

function resetEmailLinkStatus() {
  pendingContact = "";
  authOtp.value = "";
  if (authOtpField) {
    authOtpField.hidden = true;
    authOtpField.style.display = "none";
  }
  otpSection.hidden = true;
  otpSection.style.display = "none";
  otpHint.textContent = "";
  authOtpError.textContent = "";
  authSubmit.textContent = "Send Sign-In Link";
  authSubmit.disabled = false;
}

function updateEmailSuggestions() {
  if (!authContact || !emailSuggestions) return;
  const value = authContact.value.trim().toLowerCase();
  emailSuggestions.innerHTML = "";
  if (!value) return;

  const [localPart, typedDomain = ""] = value.split("@");
  if (!localPart || value.includes(" ")) return;

  const matchingDomains = emailDomains.filter((domain) => domain.startsWith(typedDomain));
  const domains = typedDomain ? matchingDomains : emailDomains;

  domains.slice(0, 5).forEach((domain) => {
    const option = document.createElement("option");
    option.value = `${localPart}@${domain}`;
    emailSuggestions.appendChild(option);
  });
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

function scrollToFeedback() {
  const feedbackSection = document.querySelector("#feedback");
  if (!feedbackSection) return;
  feedbackSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectedRating(form, name) {
  return form.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function updateTextCounter(field, output) {
  if (!field || !output) return;
  output.textContent = String(field.value.length);
}

function setFeedbackStatus(message, type = "") {
  if (!feedbackStatus) return;
  feedbackStatus.textContent = message;
  feedbackStatus.classList.remove("success", "error");
  if (type) feedbackStatus.classList.add(type);
}

function currentSignedInContact() {
  try {
    const cached = JSON.parse(localStorage.getItem(familyAuthKey) || "{}");
    return cached.contact || firebaseAuth?.currentUser?.email || "";
  } catch {
    return firebaseAuth?.currentUser?.email || "";
  }
}

async function submitFeedback(event) {
  event.preventDefault();
  if (!feedbackForm) return;

  const interactive = selectedRating(feedbackForm, "interactive");
  const understanding = selectedRating(feedbackForm, "understanding");
  const experience = selectedRating(feedbackForm, "experience");

  if (!interactive || !understanding || !experience) {
    setFeedbackStatus("Please select star ratings for the first three questions.", "error");
    return;
  }

  const submitButton = feedbackForm.querySelector(".feedback-submit");
  const payload = {
    interactiveRating: Number(interactive),
    understandingRating: Number(understanding),
    experienceRating: Number(experience),
    improvements: feedbackImprovements?.value.trim() || "",
    suggestions: feedbackSuggestions?.value.trim() || "",
    copyRequested: Boolean(document.querySelector("#feedbackCopy")?.checked),
    contact: currentSignedInContact(),
    adminEmail: "vinnuharshu0399@gmail.com",
    submittedAt: new Date().toISOString(),
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
  };

  submitButton.disabled = true;
  setFeedbackStatus("Submitting feedback...");

  try {
    if (!firebaseDb) {
      throw new Error("Firestore is not enabled yet.");
    }
    await firebaseDb.collection("feedbackResponses").add(payload);
    feedbackForm.reset();
    updateTextCounter(feedbackImprovements, improvementCount);
    updateTextCounter(feedbackSuggestions, suggestionCount);
    setFeedbackStatus("Thank you. Your feedback has been submitted successfully.", "success");
  } catch (error) {
    console.error("Polisetty feedback submission failed", error);
    setFeedbackStatus("Feedback could not be submitted. Please enable Firebase Firestore and try again.", "error");
  } finally {
    submitButton.disabled = false;
  }
}

function resetAuthForm() {
  authContactError.textContent = "";
  authOtpError.textContent = "";
  if (authContact) {
    authContact.value = "";
    authContact.type = "email";
    authContact.inputMode = "email";
    authContact.autocomplete = "email";
    authContact.placeholder = "";
  }
  if (authContactLabel) authContactLabel.textContent = "Email Address";
  resetEmailLinkStatus();
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

function firebaseErrorMessage(error) {
  const code = error?.code || "";
  if (code === "auth/invalid-email") return "Invalid email address.";
  if (code === "auth/popup-closed-by-user") return "Google sign-in was closed before completion.";
  if (code === "auth/cancelled-popup-request") return "Google sign-in was cancelled. Please try again.";
  if (code === "auth/unauthorized-domain") {
    return "This website domain is not authorized in Firebase Authentication settings.";
  }
  if (code === "auth/operation-not-allowed") {
    return "This sign-in method is not enabled in Firebase Authentication.";
  }
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

function authorizeUser(user, method = "email") {
  localStorage.setItem(
    familyAuthKey,
    JSON.stringify({
      authorized: true,
      method,
      contact: user?.email || pendingContact || authContact.value.trim(),
      signedInAt: new Date().toISOString(),
      userId: user?.uid || "",
    })
  );
  showProtectedSite();
}

async function sendEmailLink() {
  if (!firebaseAuth) {
    authContactError.textContent = "Firebase Authentication is not connected yet. Please add Firebase config in firebase-config.js.";
    return;
  }

  authContactError.textContent = "";
  authOtpError.textContent = "";

  const email = authContact.value.trim();
  if (!validEmail(email)) {
    authContactError.textContent = "Invalid email address.";
    authContact.focus();
    return;
  }

  authSubmit.disabled = true;
  authSubmit.textContent = "Sending Link...";
  pendingContact = email;

  try {
    await firebaseAuth.sendSignInLinkToEmail(email, getActionCodeSettings());
    localStorage.setItem(pendingEmailKey, email);
    otpHint.textContent = "A secure sign-in link has been sent to your email. Open that link to enter the family legacy.";
    otpSection.hidden = false;
    otpSection.style.display = "";
    if (authOtpField) {
      authOtpField.hidden = true;
      authOtpField.style.display = "none";
    }
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

async function signInWithGoogle() {
  if (!firebaseAuth) {
    authContactError.textContent = "Firebase Authentication is not connected yet. Please add Firebase config in firebase-config.js.";
    return;
  }

  authContactError.textContent = "";
  authOtpError.textContent = "";
  googleSignInButton.disabled = true;

  try {
    const provider = new window.firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const result = await firebaseAuth.signInWithPopup(provider);
    authorizeUser(result.user, "google");
  } catch (error) {
    console.error("Polisetty Firebase Google sign-in failed", error);
    authContactError.textContent = firebaseErrorMessage(error);
  } finally {
    googleSignInButton.disabled = false;
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
    authorizeUser(result.user, "email");
  } catch (error) {
    console.error("Polisetty Firebase email link verification failed", error);
    showSignIn();
    authContactError.textContent = firebaseErrorMessage(error);
  }
  return true;
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  await sendEmailLink();
}

async function initializeAuth() {
  resetEmailLinkStatus();

  if (!firebaseAuth) {
    localStorage.removeItem(familyAuthKey);
    showSignIn();
    authContactError.textContent = "Firebase Authentication is not connected yet. Please add your Firebase project settings.";
    return;
  }

  const handledEmailLink = await finishEmailLinkSignIn();
  if (handledEmailLink) return;

  const cachedSession = localStorage.getItem(familyAuthKey);
  if (cachedSession) {
    showProtectedSite();
  }

  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      authorizeUser(user, user.providerData?.[0]?.providerId === "google.com" ? "google" : "email");
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
      if (button.dataset.menuAction === "feedback") {
        scrollToFeedback();
      }
      closeSiteMenu();
    });
  });
  feedbackImprovements?.addEventListener("input", () => updateTextCounter(feedbackImprovements, improvementCount));
  feedbackSuggestions?.addEventListener("input", () => updateTextCounter(feedbackSuggestions, suggestionCount));
  feedbackForm?.addEventListener("submit", submitFeedback);
  updateTextCounter(feedbackImprovements, improvementCount);
  updateTextCounter(feedbackSuggestions, suggestionCount);
  ["click", "keydown", "mousemove", "scroll", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, recordActivity, { passive: true });
  });
  googleSignInButton?.addEventListener("click", signInWithGoogle);
  authContact.addEventListener("input", () => {
    authContactError.textContent = "";
    updateEmailSuggestions();
    resetEmailLinkStatus();
  });
  authForm.addEventListener("submit", handleAuthSubmit);

  initializeAuth();
}

