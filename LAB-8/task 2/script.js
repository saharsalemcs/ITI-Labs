var targetText = document.getElementById("targetText");
var optionsTable = document.getElementById("optionsTable");

optionsTable.addEventListener("change", function (e) {
  if (e.target.name) {
    targetText.style[e.target.name] = e.target.value;
  }
});
// implementt event Delegation
