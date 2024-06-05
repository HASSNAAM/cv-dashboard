/* Stop Right Click */
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
/* Change Mood */
let btn = document.querySelector(".theme");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let aside = document.querySelector("aside");
let h1 = document.querySelector("h1");
let links = document.querySelectorAll("aside ul li a");
let heads = document.querySelectorAll(".container h2");
let icons = document.querySelectorAll(
  ".container i:not(.contact i,.fa-file-pdf)"
);
let paragraphs = document.querySelectorAll(".container p,.projects a");
let hastage = document.querySelector(".fa-hashtag");
function changeMoodMoon() {
  document.body.style.backgroundColor = "#2c3e50";
  aside.style.backgroundColor = "#bdc3c7";
  btn.style.backgroundColor = "#2c3e50";
  moon.style.backgroundColor = "#fff";
  moon.style.color = "#2c3e50";
  sun.style.color = "#bdc3c7";
  h1.style.color = "#2c3e50";
  hastage.style.color = "#fff";
  links.forEach((link) => {
    link.style.color = "#2c3e50";
  });
  heads.forEach((head) => {
    head.style.color = "#bdc3c7";
  });
  icons.forEach((icon) => {
    icon.style.color = "#bdc3c7";
  });
  paragraphs.forEach((paragraph) => {
    paragraph.style.color = "#fff";
  });
}
function changeMoodSun() {
  document.body.style.backgroundColor = "#fff";
  aside.style.backgroundColor = "#2c3e50";
  sun.style.color = "#fff";
  btn.style.backgroundColor = "#bdc3c7";
  moon.style.backgroundColor = "#2c3e50";
  moon.style.color = "#bdc3c7";
  h1.style.color = "#fff";
  hastage.style.color = "#2c3e50";
  links.forEach((link) => {
    console.log(link);
    link.style.color = "#fff";
  });
  heads.forEach((head) => {
    head.style.color = "#2c3e50";
  });
  icons.forEach((icon) => {
    icon.style.color = "#2c3e50";
  });
  paragraphs.forEach((paragraph) => {
    paragraph.style.color = "#000";
  });
}
// Links
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let certificate = document.getElementById("certificate");
let project = document.getElementById("project");
let contact = document.getElementById("contact");
let aboutContent = document.querySelector(".about");
let skillsContent = document.querySelector(".skills");
let certificateContent = document.querySelector(".certificates");
let projectContent = document.querySelector(".projects");
about.addEventListener("click", function () {
  aboutContent.style.display = "block";
  skillsContent.style.display = "none";
  certificateContent.style.display = "none";
  projectContent.style.display = "none";
});
skills.addEventListener("click", function () {
  skillsContent.style.display = "block";
  aboutContent.style.display = "none";
  certificateContent.style.display = "none";
  projectContent.style.display = "none";
});
certificate.addEventListener("click", function () {
  certificateContent.style.display = "block";
  skillsContent.style.display = "none";
  aboutContent.style.display = "none";
  projectContent.style.display = "none";
});
project.addEventListener("click", function () {
  projectContent.style.display = "block";
  skillsContent.style.display = "none";
  certificateContent.style.display = "none";
  aboutContent.style.display = "none";
});
contact.addEventListener("click", function () {
  skillsContent.style.display = "none";
  certificateContent.style.display = "none";
  projectContent.style.display = "none";
  aboutContent.style.display = "none";
});
