document.getElementById("log-out-button").addEventListener("click", () => {
  localStorage.removeItem("auth");
  document.documentElement.removeAttribute("data-auth");
});
