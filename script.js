// 🔥 CHANGE THIS TO HER NAME
const correctName = "priya";

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
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("success").style.display = "block";
  } else {
    alert("Oops... try again 💔");
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