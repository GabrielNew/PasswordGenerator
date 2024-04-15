let passwordLenghtRange = 8;
const passwordInput = document.querySelector("#password");
const upperCaseCheck = document.querySelector("#uppercase-check");
const symbolsCheck = document.querySelector("#symbol-check");
const numbersCheck = document.querySelector("#numbers-check");
const securityIndicatorBar = document.querySelector("#security-indicator-bar");

const generatePassword = () => {
  let chars = "abcdefghjkmnpqrstuvwxyz";

  const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const numberChars = "123456789";
  const symbolChars = "?!@&*()[]";

  if (upperCaseCheck.checked) chars += upperCaseChars;

  if (symbolsCheck.checked) chars += symbolChars;

  if (numbersCheck.checked) chars += numberChars;

  let password = "";

  for (let i = 0; i < passwordLenghtRange; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }
  passwordInput.value = password;
  passwordStrenght();
  calculateFontSize()
};

const passwordStrenght = () => {
  const percent = Math.round(
    (passwordLenghtRange / 64) * 20 +
      (upperCaseCheck.checked ? 20 : 0) +
      (numbersCheck.checked ? 25 : 0) +
      (symbolsCheck.checked ? 35 : 0)
  );

  securityIndicatorBar.style.width = `${percent}%`;

  if (percent >= 0 && percent <= 30) {
    securityIndicatorBar.classList.remove("safe");
    securityIndicatorBar.classList.remove("warning");
    securityIndicatorBar.classList.add("critical");
  } else if (percent > 30 && percent <= 70) {
    securityIndicatorBar.classList.remove("safe");
    securityIndicatorBar.classList.remove("critical");
    securityIndicatorBar.classList.add("warning");
  } else {
    securityIndicatorBar.classList.remove("critical");
    securityIndicatorBar.classList.remove("warning");
    securityIndicatorBar.classList.add("safe");
  }

  percent >= 100
    ? securityIndicatorBar.classList.add("completed")
    : securityIndicatorBar.classList.remove("completed");
};

const calculateFontSize = () => {
    if(passwordLenghtRange > 45){
        passwordInput.classList.remove("font-sm");
        passwordInput.classList.remove("font-xs");
        passwordInput.classList.add("font-xxs");
    }
    else if(passwordLenghtRange > 32){
        passwordInput.classList.remove("font-sm");
        passwordInput.classList.add("font-xs");
        passwordInput.classList.remove("font-xxs");
    }else if(passwordLenghtRange > 22){
        passwordInput.classList.add("font-sm");
        passwordInput.classList.remove("font-xs");
        passwordInput.classList.remove("font-xxs");
    }else{
        passwordInput.classList.remove("font-sm");
        passwordInput.classList.remove("font-xs");
        passwordInput.classList.remove("font-xxs");
    }
};

const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.value);
};

const passwordLenghtRangeEl = document.querySelector("#password-length");

passwordLenghtRangeEl.addEventListener("input", function () {
  passwordLenghtRange = passwordLenghtRangeEl.value;
  document.querySelector("#password-length-text").innerText =
    passwordLenghtRange;
  generatePassword();
});

upperCaseCheck.addEventListener("click", generatePassword);
numbersCheck.addEventListener("click", generatePassword);
symbolsCheck.addEventListener("click", generatePassword);
document.querySelector("#renew").addEventListener("click", generatePassword);

document.querySelector("#copy-1").addEventListener("click", copyPassword);
document.querySelector("#copy-2").addEventListener("click", copyPassword);

generatePassword();
