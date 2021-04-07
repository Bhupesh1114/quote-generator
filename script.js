const quoteContainers = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// using local file NOT online API--------
function newQuotes() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

newQuotes();

