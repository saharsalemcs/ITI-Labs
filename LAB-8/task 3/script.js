function register() {
  var name = document.getElementById("txtName").value;
  var color = document.getElementById("selColor").value;

  var radios = document.getElementsByName("gender");
  var gender = "";
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      gender = radios[i].value;
      break;
    }
  }

  document.getElementById("profileName").innerHTML = name;
  document.getElementById("profileName").style.color = color;

  if (gender === "male") {
    document.getElementById("profileImg").src = "male.png";
  } else if (gender === "female") {
    document.getElementById("profileImg").src = "female.png";
  }

  document.getElementById("formContainer").style.display = "none";
  document.getElementById("profileInfo").style.display = "block";
}
