fetch("./tabs.mini.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector(".title").innerHTML = html;
  })
  .catch((error) => console.error(error));

function overlay_adofai_1_open() {
  document.getElementById("overlay-adofai-1").style.display = "block";
}
function overlay_adofai_1_close() {
  document.getElementById("overlay-adofai-1").style.display = "none";
}

adofai_1_button_gray();
function adofai_1_button_gray() {
  document.getElementById("adofai-1-button-container").style.pointerEvents =
    "none";
  document.getElementById("adofai-1-button-container").style.opacity = "0.5";
}
document.getElementById("adofai-1-checkbox").addEventListener("change", () => {
  if (document.getElementById("adofai-1-checkbox").checked) {
    document.getElementById("adofai-1-button-container").style.pointerEvents =
      "auto";
    document.getElementById("adofai-1-button-container").style.opacity = "1";
  } else {
    adofai_1_button_gray();
  }
});
