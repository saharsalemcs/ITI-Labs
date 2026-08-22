window.addEventListener("load", function () {
  up = document.getElementById("up");
  up.addEventListener("drop", dropped);
  up.addEventListener("dragover", overdrag);
  up.addEventListener("dragenter", enterdrag);

  down = document.getElementById("down");
  down.addEventListener("dragleave", leavedrag);

  imgs = document.images;
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dragstart", startdrag);
    imgs[i].addEventListener("dragend", enddrag);
  }
});

function startdrag(e) {
  console.log(e);

  e.dataTransfer.setData("myimg", e.target.outerHTML);
}
function enddrag(e) {
  e.preventDefault();

  e.target.style.display = "none";

  checkEmpty();
}
function dropped(e) {
  e.preventDefault();
  up.innerHTML += e.dataTransfer.getData("myimg");
}
function overdrag(e) {
  e.preventDefault();
}
function leavedrag(e) {
  e.preventDefault();
}
function enterdrag(e) {
  e.preventDefault();
  up.style.backgroundColor = "orange";
}
function checkEmpty() {
  let images = down.getElementsByTagName("img");
  let visible = 0;

  for (let i = 0; i < images.length; i++) {
    if (images[i].style.display != "none") {
      visible++;
    }
  }

  if (visible == 0) {
    down.innerHTML += "<p>This container is empty</p>";
    down.style.fontSize = "24px";
    down.style.fontWeight = "bold";
    down.style.color = "red";
    down.style.backgroundColor = "#89B97F";
  }
}
