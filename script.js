const quoteContainers = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// using local file NOT online API--------
function newQuotes() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if Author field is blank and replace it with "Unknown"
    if(!quote.author ) {
     authorText.textContent = "Unknown";  
    }else {
        authorText.textContent = quote.author;
    }
    //  Check Quote length to determine styling
    if(quote.text.length > 100) {
        quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
    quoteText.textContent = quote.text;
}


newQuotes();

