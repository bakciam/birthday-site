// Edit these four values to personalize the letter.
const birthday = {
  recipient: "塟塟",
  sender: "JHuo",
  date: "今天值得被认真庆祝",
};

document.querySelector("#recipient").textContent = birthday.recipient;
document.querySelector("#footerRecipient").textContent = birthday.recipient;
document.querySelector("#sender").textContent = birthday.sender;
document.querySelector("#birthdayDate").textContent = birthday.date;

const letter = document.querySelector("#letter");
document.querySelector("#openLetter").addEventListener("click", () => {
  letter.classList.add("is-open");
  letter.scrollIntoView({ behavior: "smooth", block: "center" });
  launchConfetti();
});

function launchConfetti() {
  const container = document.querySelector("#confetti");
  const colors = ["#f5bd67", "#ec806d", "#f8f4e9", "#83a7c9"];
  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("i");
    piece.className = "piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 240}px`);
    piece.style.animationDelay = `${Math.random() * 0.35}s`;
    container.append(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}
