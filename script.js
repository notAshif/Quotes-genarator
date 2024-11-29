const quotesText = document.getElementById('QuotesText');
const authorName = document.getElementById('author');
const generateBtn = document.getElementById('generate');
const downloadBtn = document.getElementById('download');
const choiceBtn = document.getElementById('choice');

const ApiKey = 'https://dummyjson.com/quotes/random';
const quotes = [];
const author = [];

function generate() {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      quotesText.innerHTML = data.quote;
      authorName.innerHTML = data.author;
    });
}
 


downloadBtn.addEventListener('click', () =>{
    const text = document.getElementById('QuotesText').textContent;
    const author = document.getElementById('author').textContent;

    const blob = new Blob([text, author], {type: 'text/plain'});
    const quotesURL = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = quotesURL;
    a.download = 'quotes.txt';
    a.click();

    URL.revokeObjectURL(quotesURL);
});

const clearQuote = document.getElementById('clearQuote');
clearQuote.addEventListener('click', () => {
    quotesText.innerHTML = 'Quotes Cleared';
    authorName.innerHTML = '?';
})

generateBtn.addEventListener('click', generate);