
const titleEl = document.querySelector("#title");
const button = document.querySelector("#scan-btn");
const resultEl = document.querySelector("#result");

titleEl.textContent = "DOM Practice";

button.addEventListener("click", () => {
  resultEl.textContent = "Scanning item...";

  setTimeout(() => {
    resultEl.textContent = "Result: this matches your style profile ✅";
  }, 1000);
});


function addListItem(text) {
  const list = document.querySelector("#history-list");
  const item = document.createElement("li");
  item.textContent = text;
  list.appendChild(item);
}

button.addEventListener("click", () => {
  addListItem(`Scan at ${new Date().toLocaleTimeString()}`);
});

function toggleLoading() {
  const loader = document.querySelector("#loader");
  loader.classList.toggle("hidden");
}
