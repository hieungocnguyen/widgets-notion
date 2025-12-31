const startDate = new Date("2025-12-31");
const endDate = new Date("2026-12-31");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

function updateProgressBar() {
  const today = new Date();

  const timeOneDay = 1000 * 60 * 60 * 24;

  const daysPassed = Math.ceil((today - startDate) / timeOneDay)-1;

  const totalDays = Math.ceil((endDate - startDate) / timeOneDay);

  const progressPercentage = Math.min((daysPassed / totalDays) * 100, 100);

  progressBar.style.width = progressPercentage + "%";
  progressText.innerText = `${daysPassed}/${totalDays}`;
}

document.addEventListener("DOMContentLoaded", updateProgressBar);
