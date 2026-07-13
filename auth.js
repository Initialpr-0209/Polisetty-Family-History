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
let generatedOtp = "";
let otpSent = false;

function isAlreadyAuthorized() {
  try {
    const session = JSON.parse(localStorage.getItem(familyAuthKey));
    return Boolean(session?.authorized);
  } catch (error) {
    return false;
  }
}

function showProtectedSite() {
  authBody.classList.remove("auth-pending", "auth-locked");
  authBody.classList.add("auth-ready");
  if (authSection) authSection.hidden = true;
}

function showSignIn() {
  authBody.classList.remove("auth-pending", "auth-ready");
  authBody.classList.add("auth-locked");
  if (authSection) authSection.hidden = false;
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function validMobile(value) {
  return /^\d{10}$/.test(value) && !invalidMobileNumbers.has(value);
}

function currentContactValid() {
  const value = authContact.value.trim();
  if (authMethod === "email") return validEmail(value);
  return validMobile(value);
}

function resetOtp() {
  generatedOtp = "";
  otpSent = false;
  authOtp.value = "";
  otpSection.hidden = true;
  otpHint.textContent = "";
  authOtpError.textContent = "";
  authSubmit.textContent = "Send OTP";
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

function issueOtp() {
  generatedOtp = String(Math.floor(100000 + Math.random() * 900000));
  otpSent = true;
  otpSection.hidden = false;
  authSubmit.textContent = "Verify and Sign In";
  otpHint.textContent = authMethod === "email"
    ? "OTP has been sent to the entered email address."
    : "OTP has been sent to the entered mobile number.";
  console.info("OTP service pending. Generated OTP for backend handoff:", generatedOtp);
  authOtp.focus();
}

function authorizeUser() {
  localStorage.setItem(
    familyAuthKey,
    JSON.stringify({
      authorized: true,
      method: authMethod,
      contact: authContact.value.trim(),
      signedInAt: new Date().toISOString(),
    })
  );
  showProtectedSite();
}

function handleAuthSubmit(event) {
  event.preventDefault();
  authContactError.textContent = "";
  authOtpError.textContent = "";

  if (!currentContactValid()) {
    authContactError.textContent = authMethod === "email" ? "Invalid email address." : "Invalid mobile number.";
    authContact.focus();
    return;
  }

  if (!otpSent) {
    issueOtp();
    return;
  }

  if (authOtp.value.trim() !== generatedOtp) {
    authOtpError.textContent = "Invalid OTP.";
    authOtp.focus();
    return;
  }

  authorizeUser();
}

if (authSection && authForm) {
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

  if (isAlreadyAuthorized()) {
    showProtectedSite();
  } else {
    showSignIn();
  }
}
