function openOrder() {
  window.scrollTo(0, 0);
  document.getElementById('orderBlock').style.right = "0";
  document.getElementById('orderBlock').style.display = "block";
}

function closeOrder(e) {
  e.preventDefault();
  document.getElementById('orderBlock').style.right = "0";
}