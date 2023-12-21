/* Stop Right Click */
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
/* Change Mood */
let btn = document.querySelector(".theme");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let aside = document.querySelector("aside");
function changeMoodMoon() {
  if ((document.body.style.backgroundColor = "#bdc3c7")) {
    document.body.style.backgroundColor = "#2c3e50";
    btn.style.backgroundColor = "#2c3e50";
    moon.style.backgroundColor = "#e74c3c";
    moon.style.color = "#2c3e50";
    sun.style.color = "#e74c3c";
    aside.style.backgroundColor = "#2c3e50";
  }
}
function changeMoodSun() {
  if ((document.body.style.backgroundColor = "#2c3e50")) {
    document.body.style.backgroundColor = "#bdc3c7";
    sun.style.color = "#f39c12";
    btn.style.backgroundColor = "#bdc3c7";
    moon.style.backgroundColor = "#2c3e50";
    moon.style.color = "#bdc3c7";
    aside.style.backgroundColor = "#e74c3c";
  }
}
