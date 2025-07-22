let quotes = [];

const initialQuotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Don’t let yesterday take up too much of today.", category: "Productivity" },
    { text: "You learn more from failure than from success.", category: "Learning" }
];
quotes = [...initialQuotes];

function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.innerText = `"${randomQuote.text}" — ${randomQuote.category}`;
}

function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (quoteText === "" || quoteCategory === "") {
    alert("Please enter both a quote and a category.");
    return;
  }

  const newQuote = { text: quoteText, category: quoteCategory };
  quotes.push(newQuote);

  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
  alert("Quote added!");
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);

showRandomQuote();
