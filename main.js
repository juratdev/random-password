const input = document.getElementById("input");
const copy = document.getElementById("copy");
const btn = document.getElementById("btn");

btn.onclick = createPassword;
copy.onclick = copyPassword;


function createPassword() {
  const all = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * all.length);
    password += all.substring(randomNum, randomNum + 1);
  }
  input.value = password;
}

function copyPassword() {
  input.select();
  navigator.clipboard.writeText(input.value);
}