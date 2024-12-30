const revealBtn = document.getElementById("reveal-btn");
const questionDiv = document.getElementById("question");
const responseDiv = document.getElementById("response");
const responseMessage = document.getElementById("response-message");

revealBtn.addEventListener("click", () => {
    questionDiv.classList.remove("hidden");
    revealBtn.style.display = "none";
});

document.querySelector(".yes-btn").addEventListener("click", () => {
    responseMessage.textContent = "Aku sangat bahagia! 💖";
    responseDiv.classList.remove("hidden");
    questionDiv.classList.add("hidden");
});

document.querySelector(".no-btn").addEventListener("click", () => {
    responseMessage.textContent = "Tidak apa-apa, aku akan tetap menyayangimu. 💔";
    responseDiv.classList.remove("hidden");
    questionDiv.classList.add("hidden");
});