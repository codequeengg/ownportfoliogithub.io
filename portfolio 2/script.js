let btn = document.querySelector(".mode");
let icon = btn.querySelector(".fa-moon");

btn.onclick = function () {
  if (icon.classList.contains("fa-moon")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
};

var mode = document.getElementById("mode");
mode.onclick = function () {
  document.body.classList.toggle("darkTheme");
  if (icon.classList.contains("fa-moon")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
};
