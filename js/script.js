/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
let html = ``;
/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'You\'re gonna need a bigger boat', 
    source: 'Capt Brody',
    citation: 'Jaws',
    year: '1975'
  },
  {
    quote: 'Okay, Houston we have a problem.', 
    source: 'Jack Swigert',
    citation: 'Apollo 13',
    year: '1995'
  },
  {
    quote: 'Frankly my dear I don’t give a damn.', 
    source: 'Rhett Butler',
    citation: 'Gone with the wind',
    year: '1939'
  },
  {
    quote: 'We have to go back!', 
    source: 'Jack Shephard',
    citation: 'Lost',
    year: ''
  },
  {
    quote: 'I\'m gonna make him an offer he can\'t refuse.', 
    source: 'Don Corleone',
    citation: 'Godfather',
    year: '1972'
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];

  return randomQuote;
}

getRandomQuote();

/***
 * `printQuote` function
***/
function printQuote(){
  let item = getRandomQuote();

  html = `
    <p class="quote">
      ${item.quote}
    </p>
    <p class="source">
      ${item.source}
      ${item.citation ? `<span class="citation">${item.citation}</span>`: ''}
      ${item.year ? `<span class="year">${item.year}</span>`: ''}
    </p>
  `;

  return html;
}

printQuote();

document.getElementById('quote-box').innerHTML = html;

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);