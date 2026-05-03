// 🔥 CHANGE THIS TO HER NAME
const correctName = "tasneem";

const button = document.getElementById("unlockBtn");
const input = document.getElementById("nameInput");

button.addEventListener("click", checkName);

// Also allow Enter key
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkName();
  }
});

function checkName() {
  const value = input.value.trim().toLowerCase();

  if (value === correctName.toLowerCase()) {
  window.location.href = "love.html";

  } else {
    alert("Oops...sorry can't let you in ⛔");
  }
}

/* 💖 Floating Hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 10 + 10) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);

}, 300);