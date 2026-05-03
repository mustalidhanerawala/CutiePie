const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const text = document.getElementById("letterText");
const messages = ["Hey ❤️", "I wanted to tell you something...", "You make my days better 😊", "I really like you 💖", "Just thought you should know 💌"];
let index = 0; /* OPEN */
openBtn.addEventListener("click", () => { envelope.classList.add("open"); setTimeout(() => { letter.classList.add("show"); text.innerText = messages[index]; openBtn.classList.add("hidden"); nextBtn.classList.remove("hidden"); prevBtn.classList.remove("hidden"); }, 500); });
/* NEXT */ nextBtn.addEventListener("click", () => { if (index < messages.length - 1) { letter.classList.remove("show"); letter.classList.add("crush"); setTimeout(() => { index++; text.innerText = messages[index]; letter.classList.remove("crush"); letter.classList.add("show"); }, 500); } }); /* PREVIOUS */ prevBtn.addEventListener("click", () => { if (index > 0) { letter.classList.remove("show"); letter.classList.add("crush"); setTimeout(() => { index--; text.innerText = messages[index]; letter.classList.remove("crush"); letter.classList.add("show"); }, 500); } });