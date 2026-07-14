const familyAuthKey = "polisettyFamilyAuth";
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

const supabaseSettings = window.POLISETTY_SUPABASE || {};
const supabaseReady = Boolean(
  window.supabase &&
  supabaseSettings.url &&
  supabaseSettings.anonKey &&
  !supabaseSettings.url.includes("YOUR-") &&
  !supabaseSettings.anonKey.includes("YOUR-")
);
const supabaseClient = supabaseReady
  ? window.supabase.createClient(supabaseSettings.url, supabaseSettings.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;
const phoneCountryCode = supabaseSettings.phoneCountryCode || "+91";

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
  authOtp.value = "";
  otpSection.hidden = true;
  otpSection.style.display = "none";
  otpHint.textContent = "";
  authOtpError.textContent = "";
  authSubmit.textContent = "Send OTP";
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
  }, 3600);
}

function resetAuthForm() {
  authContactError.textContent = "";
  authOtpError.textContent = "";
  resetOtp();
  setMethod("email");
}

async function logoutUser(reason = "") {
  localStorage.removeItem(familyAuthKey);
  if (supabaseClient) await supabaseClient.auth.signOut();
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

async function issueOtp() {
  if (!supabaseClient) {
    authContactError.textContent = "OTP service is not connected yet. Please add Supabase URL and anon key in supabase-config.js.";
    return;
  }

  authSubmit.disabled = true;
  authSubmit.textContent = "Sending OTP...";
  pendingContact = authContact.value.trim();
  pendingPhone = authMethod === "mobile" ? formatPhone(pendingContact) : "";

  let error = null;
  try {
    const response = authMethod === "email"
      ? await supabaseClient.auth.signInWithOtp({
          email: pendingContact,
          options: { shouldCreateUser: true },
        })
      : await supabaseClient.auth.signInWithOtp({
          phone: pendingPhone,
          options: { shouldCreateUser: true },
        });
    error = response.error;
  } catch (requestError) {
    error = requestError;
  }
  authSubmit.disabled = false;

  if (error) {
    resetOtp();
    authSubmit.textContent = "Send OTP";
    authContactError.textContent =
      error.message === "Failed to fetch"
        ? "Unable to reach OTP service. Please check Supabase Auth settings and internet access."
        : error.message || "Unable to send OTP. Please try again.";
    authContact.focus();
    return;
  }

  otpSent = true;
  otpSection.hidden = false;
  otpSection.style.display = "";
  authSubmit.textContent = "Verify and Sign In";
  otpHint.textContent = authMethod === "email"
    ? "OTP has been sent to the entered email address."
    : "OTP has been sent to the entered mobile number.";
  authOtp.focus();
}

function authorizeUser(session) {
  localStorage.setItem(
    familyAuthKey,
    JSON.stringify({
      authorized: true,
      method: authMethod,
      contact: pendingContact || authContact.value.trim(),
      signedInAt: new Date().toISOString(),
      userId: session?.user?.id || "",
    })
  );
  showProtectedSite();
}

async function verifyOtp() {
  if (!supabaseClient) {
    authOtpError.textContent = "OTP service is not connected yet.";
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

  const payload = authMethod === "email"
    ? { email: pendingContact, token, type: "email" }
    : { phone: pendingPhone, token, type: "sms" };
  let data = null;
  let error = null;
  try {
    const response = await supabaseClient.auth.verifyOtp(payload);
    data = response.data;
    error = response.error;
  } catch (requestError) {
    error = requestError;
  }
  authSubmit.disabled = false;

  if (error) {
    authSubmit.textContent = "Verify and Sign In";
    authOtpError.textContent =
      error.message === "Failed to fetch"
        ? "Unable to reach OTP service. Please check your internet connection and try again."
        : error.message || "Invalid OTP.";
    authOtp.focus();
    return;
  }

  authorizeUser(data?.session);
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
  if (!supabaseClient) {
    localStorage.removeItem(familyAuthKey);
    showSignIn();
    return;
  }

  const { data } = await supabaseClient.auth.getSession();
  if (data?.session) {
    authorizeUser(data.session);
  } else {
    localStorage.removeItem(familyAuthKey);
    showSignIn();
  }
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
