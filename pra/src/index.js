const verseChoose = document.querySelector("select");  //referencia a select
const poemDisplay = document.querySelector("pre");      //referencia a pre

verseChoose.addEventListener("change", () => { //event listener do select, quanddo o usuario seleciona um novo valor, o novo valor
    const verse = verseChoose.value;
    updateDisplay(verse); //
});

function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase(); //replace substitui tirando os espaços, toLowercase diminui os caracteres
    const url = `${verse}.txt` //

    // Call `fetch()`, passing in the URL.
fetch(url)
// fetch() returns a promise. When we have received a response from the server,
// the promise's `then()` handler is called with the response.
.then((response) => {
  // Our handler throws an error if the request did not succeed.
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  // Otherwise (if the response succeeded), our handler fetches the response
  // as text by calling response.text(), and immediately returns the promise
  // returned by `response.text()`.
  return response.text();
})
// When response.text() has succeeded, the `then()` handler is called with
// the text, and we copy it into the `poemDisplay` box.
.then((text) => {
  poemDisplay.textContent = text;
})
// Catch any errors that might happen, and display a message
// in the `poemDisplay` box.
.catch((error) => {
  poemDisplay.textContent = `Could not fetch verse: ${error}`;
});


}