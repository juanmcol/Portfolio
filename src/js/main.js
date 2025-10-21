// quote array [quote, author]
const quotes = [
    ["The true creator is necessity, who is the mother of our invention.", "Plato"],
    ["Ack Ack", "Martian, Mars Attacks!"]
];

// change quote randomly
const getQuote = function() {
    let quote = document.getElementById("quote");
    let author = document.getElementById("quote-author");

    let num = 0;
    do {
        num = Math.floor(Math.random() * quotes.length);
    } while (quote.innerHTML == quotes[num][0]);

    quote.innerHTML = quotes[num][0];
    author.innerHTML = quotes[num][1];
}

// change quote every x amount of milliseconds
setInterval(getQuote, 10000);

// change "scroll for more" to "Latest Projects", and hide the arrow
let latest = document.getElementById("latest-span");
latest.innerHTML = "scroll down for more";

document.addEventListener("scroll", function (e) {
    latest.innerHTML = "Latest Projects";
    document.getElementById("arrow-div").style.display = "none";
})