// function togglePassword() {
//   const eyeIconClose = document.querySelector("#eyeIconClose");
//   const eyeIconOpen = document.querySelector("#eyeIconOpen");
//   const passwordField = document.querySelector("#passwordField");
//   eyeIconClose.addEventListener("click", () => {
//     if (passwordField.type === "password") {
//       passwordField.type = "text";
//       eyeIconClose.style = "display: none;";
//       eyeIconOpen.style = "display: block;";
//     } else {
//       passwordField.type = "password";
//       eyeIconClose.style = "display: block;";
//       eyeIconOpen.style = "display: none;";
//     }
//   });
//   eyeIconOpen.addEventListener("click", () => {
//     if (passwordField.type === "text") {
//       passwordField.type = "password";
//       eyeIconClose.style = "display: block;";
//       eyeIconOpen.style = "display: none;";
//     } else {
//       passwordField.type = "text";
//       eyeIconClose.style = "display: none;";
//       eyeIconOpen.style = "display: block;";
//     }
//   });
// }
// togglePassword();

function togglePassword() {
  const eyeIconClose = document.querySelector("#eyeIconClose");
  const eyeIconOpen = document.querySelector("#eyeIconOpen");
  const passwordField = document.querySelector("#passwordField");

  function toggle() {
    const isHidden = passwordField.type === "password";
    passwordField.type = isHidden ? "text" : "password";
    eyeIconClose.style.display = isHidden ? "none" : "block";
    eyeIconOpen.style.display = isHidden ? "block" : "none";
  }

  eyeIconClose.addEventListener("click", toggle);
  eyeIconOpen.addEventListener("click", toggle);
}

togglePassword();
