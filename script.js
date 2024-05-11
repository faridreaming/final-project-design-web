function login() {
  var username = document.getElementById("username").value;
  alert("Selamat datang, " + username + "!");
  window.location.href = "home-page.html";
  return false;
}
