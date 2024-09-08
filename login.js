
/* Created by Tivotal */

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBTN = document.querySelector("label.login");
const signupBTN = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");

signupBTN.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBTN.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBTN.click();
  return false;
};
