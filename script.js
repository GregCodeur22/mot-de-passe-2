let generateButton = document.getElementById("generetaButton");

const dataLowercase = "azertyuiopmlkjhgfdsqwxcvnb";
const dataUppercase = dataLowercase.toUpperCase();
const dataNUmbers = "0987654321";
const dataSymbols = "&é\"'(-è_çà))=$^ù*!:;,?./";
const rangeValue = document.getElementById("password-length");
const passwordDisplay = document.getElementById("password-output");
console.log(passwordDisplay);

function generateMDP() {
  let data = [];
  let password = "";

  console.log(lowercase.checked);

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNUmbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("veuillez séléctionner des critères");
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }
  passwordDisplay.value = password;

  passwordDisplay.select();
  document.execCommand("copy");

  generateButton.textContent = "copié !";

  setTimeout(() => {
    generateButton.textContent = "générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generateMDP);
