document.documentElement.setAttribute(
  "data-auth",
  localStorage.getItem("auth") === "true" ? "true" : "false",
);
