function copyDate() {
  var today = new Date();
  document.getElementById("spanDate").innerHTML = today.getFullYear();
}
window.onload = copyDate;
