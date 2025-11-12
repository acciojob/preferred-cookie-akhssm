//your JS code here. If required.

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookieArr = document.cookie.split("; ");
  for (let cookie of cookieArr) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return null;
}

function applyPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  setCookie("fontsize", fontSize, 7);
  setCookie("fontcolor", fontColor, 7);

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);
});

applyPreferences();
