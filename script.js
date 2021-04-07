const quoteContainers = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// using local file NOT online API--------
function newQuotes() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if Author field is blank and replace it with "Unknown"
    if(quote.author === null) {
     authorText.textContent = "Unknown";  
    }else {
        authorText.textContent = quotw.author;
    }
    //  Check Quote length to determine styling
    if(quote.text.length > 50) {
        quoteText.classList
    }

    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}


newQuotes();

