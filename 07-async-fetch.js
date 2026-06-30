const button = document.querySelector("#fetch-btn");
const resultEl = document.querySelector("#result");
const loader = document.querySelector("#loader");


async function getRandomJoke() {
  loader.classList.remove("hidden");
  resultEl.textContent = "";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    resultEl.textContent = `${data.setup} — ${data.punchline}`;
  } catch (error) {
    resultEl.textContent = "Something went wrong fetching the joke.";
    console.error(error);
  } finally {
    loader.classList.add("hidden");
  }
}

button.addEventListener("click", getRandomJoke);

