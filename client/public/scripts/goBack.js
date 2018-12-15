function goToMenu() {
  window.location.href = "menu";
}

//Spacebar trigger the above function
document.body.addEventListener("keyup", function(e) {
  if (e.key == " ")
    goToMenu();
});
