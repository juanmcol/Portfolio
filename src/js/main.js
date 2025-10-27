// quote array [quote, author]
const quotes = [
    ["The true creator is necessity, who is the mother of our invention.", "Plato"],
    ["Ack Ack.", "Martian, Mars Attacks!"],
    ["Failure is success in progress.", "Albert Einstein"]
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

document.addEventListener("scroll", function() {
    latest.innerHTML = "Latest Projects";
    document.getElementById("arrow-div").style.display = "none";
})


// table set to full view when clicking details
const table = document.getElementById("featured-table");
const th = document.getElementById("featured-th");

const featuredLeft = document.getElementById("left");
const expand = document.getElementById("expand");

let expandContract = function() {
    if (window.innerWidth > "1344") {
        if (expand.textContent === "(click to expand)") {
            featuredLeft.style.display = "none";
            table.style.gridArea = "2/3/13/11";
            table.style.padding = "4rem";
            let tbody = table.querySelector("tbody");
            tbody.style.display = "grid";
            table.style.fontSize = "1.25rem";
            expand.textContent = "(click to shrink)";
        } else {
            featuredLeft.style.display = "block";
            table.style.gridArea = "3/9/3/13";
            table.style.padding = "2rem";
            let tbody = table.querySelector("tbody");
            tbody.style.display = "table";
            table.style.fontSize = "1rem";
            expand.textContent = "(click to expand)";
        }
    } else {
        if (expand.textContent === "(click to expand)") {
            featuredLeft.style.display = "none";
            table.style.gridArea = "3/3/14/11";
            let tbody = table.querySelector("tbody");
            tbody.style.display = "grid";
            table.style.fontSize = "1.25rem";
            expand.textContent = "(click to shrink)";
        } else {
            featuredLeft.style.display = "block";
            table.style.gridArea = "13/1/13/13";
            let tbody = table.querySelector("tbody");
            tbody.style.display = "none";
            table.style.fontSize = "1rem";
            expand.textContent = "(click to expand)";
        }
    }
}

expand.addEventListener("click", expandContract);

// reset the featured section when the window is resized
let resetFeatured = function() {
    if (window.innerWidth > "1344") {
        featuredLeft.style.display = "block";
        table.style.gridArea = "3/9/3/13";
        table.style.padding = "2rem";
        let tbody = table.querySelector("tbody");
        tbody.style.display = "table";
        table.style.fontSize = "1rem";
        expand.textContent = "(click to expand)";
    } else {
        featuredLeft.style.display = "block";
        table.style.gridArea = "13/1/13/13";
        let tbody = table.querySelector("tbody");
        tbody.style.display = "none";
        table.style.fontSize = "1rem";
        expand.textContent = "(click to expand)";
    }
}

window.addEventListener("resize", resetFeatured);