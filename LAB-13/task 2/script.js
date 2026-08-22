let subBranches = document.querySelectorAll(".sub-branch");
let mainBranch = document.querySelector(".main-branch");

const mainCheck = document.getElementById("main");
const otherCheck = document.getElementById("sub");

mainCheck.addEventListener("change", () => {
  if (mainCheck.checked) {
    mainBranch.style.color = "#ff0000";
  } else {
    mainBranch.style.color = "#555";
  }
});

otherCheck.addEventListener("change", () => {
  subBranches.forEach((b) => {
    if (otherCheck.checked) {
      b.style.color = "#1877f2";
    } else {
      b.style.color = "#555";
    }
  });
});
