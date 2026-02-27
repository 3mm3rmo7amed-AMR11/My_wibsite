let dark = true;

function welcomeUser() {
 
    const nameInput = document.getElementById("username");
    const welcomeText = document.getElementById("welcome");
    
    if (nameInput.value === "") {
        welcomeText.innerText = "Please write your name!";
    } else {
        welcomeText.innerText = "Welcome, " + nameInput.value + "👋";
    }
}

function toggleMode() {
    const body = document.body;
    
    if (dark) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        dark = false;
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        dark = true;
    }
}
let input = document.getElementById("username");
let button = document.getElementById("entranceBtn");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    button.click();
  }
});
