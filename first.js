document.addEventListener("DOMContentLoaded", () => {
    console.log("Interactive Bubbly Portfolio successfully launched!");

    // Automated carousel engine for development quotes
    const quotes = [
        { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
        { text: "The secret to getting ahead is getting started.", author: "Mark Twain" }
    ];

    let currentQuoteIndex = 0;
    const quoteTextEl = document.getElementById("quote-text");
    const quoteAuthorEl = document.getElementById("quote-author");

    if (quoteTextEl && quoteAuthorEl) {
        setInterval(() => {
            quoteTextEl.style.opacity = 0;
            quoteAuthorEl.style.opacity = 0;

            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteTextEl.innerText = quotes[currentQuoteIndex].text;
                quoteAuthorEl.innerText = `— ${quotes[currentQuoteIndex].author}`;

                quoteTextEl.style.opacity = 1;
                quoteAuthorEl.style.opacity = 1;
            }, 400); 
        }, 6000);
    }
});
