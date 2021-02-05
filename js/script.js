/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array - a list of quotes from movies and tv with an historical quote thrown in!
 * an array of quote objects, each containing 4 properties
***/
const quotes = [
  {
    quote: 'You\'re gonna need a bigger boat', 
    source: 'Chief Brody',
    citation: 'Jaws',
    year: '1975',
  },
  {
    quote: 'Okay, Houston we have a problem.', 
    source: 'Jack Swigert',
    citation: 'Apollo 13',
    year: '1995'
  },
  {
    quote: 'Winners don\'t make excuses when the other side plays the game.', 
    source: 'Harvey Specter',
    citation: 'Suits',
    tags: ['tv series', 'law', 'comedy', 'drama']
  },
  {
    quote: 'We have to go back!', 
    source: 'Jack Shephard',
    citation: 'Lost'
  },
  {
    quote: 'I\'m gonna make him an offer he can\'t refuse.', 
    source: 'Don Corleone',
    citation: 'Godfather',
    year: '1972'
  },
  {
    quote: 'We all know the truth: more connects us than separates us. But in times of crisis the wise build bridges, while the foolish build barriers. We must find a way to look after one another, as if we were one single tribe.', 
    source: 'T\'Challa',
    citation: 'Black Panther',
    year: '2018'
  },
  {
    quote: 'Every accomplishment starts with the decision to try.', 
    source: 'John F Kennedy'
  },
  {
    quote: 'You know what I like about people? They stack so well.', 
    source: 'Frank Underwood',
    citation: 'House of Cards'
  },
  {
    quote: 'Son, your ego is writing cheques your body can\'t cash.', 
    source: 'Stinger',
    citation: 'Top Gun',
    year: '1986'
  },
  {
    quote: 'I want painful, difficult, devastating, life-changing, extraordinary love.', 
    source: 'Olivia Pope',
    citation: 'Scandal'
  },
  {
    quote: 'Success is walking from failure to failure with no loss of enthusiasm.', 
    source: 'Winston Churchill'
  },
  {
    quote: 'Snakes. Why\'d it have to be snakes.', 
    source: 'Indiana Jones',
    citation: 'Raiders of the Lost Ark',
    year: '1981'
  }
];

/***
 * `getRandomQuote` function
 * using code learned from the random number generator and random number guessing game challenges 
 * this function will generate a random number between 0 and the total length of the quotes array. Next the 
 * random number variable is assigned to a random quote variable which will get a random quote from the array
***/
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];

  return randomQuote;
}

/***
 * `randomRGB` function
 * using code learned from the 'for loops' challenge the randomValue variable will generate a random value between 0 and 255
 * then it is passed as an argument in the randomRGB function which will hold the RGB value when called in the printQuote function
***/
const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value){
  const color = `rgb(${value()}, ${value()}, ${value()})`;
  return color;
}


/***
 * `printQuote` function
 * gets the value of the getRandomQuote function and passes that value into the 'html' variable which will display
 * the properties of the random quote in a template literal. Using conditional statements nested inside the template 
 * literal will display the 'citation' or 'year' properties if they are present in the random quote from the array.
 * This markup I learned from the 'Nesting templates' section of the Mozilla Developer website: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals. This then returns that messsage 
 * to the page by targeting the page elements id 
 * This also returns the function to change the background color of the page using the randomRGB function and passing the 
 * randomValue to it
***/
function printQuote(){
  const item = getRandomQuote();

  let html = `
    <p class="quote">
      ${item.quote}
    </p>
    <p class="source">
      ${item.source}
      ${item.citation ? `<span class="citation">${item.citation}</span>`: ''}
      ${item.year ? `<span class="year">${item.year}</span>`: ''}
      ${item.tags ? `<span class="tags">${item.tags.join(', ')}</span>` : ''}
    </p>
  `;

  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = randomRGB(randomValue);
}

printQuote();

/***
 * `auto refresh` function
 * gets the printQuote function to change every 7 seconds using the setInterval function
 * This function I learned from the 'Callbacks with timers' course
 ***/
function autoRefresh(){
  let refresh = setInterval(printQuote, 7000);
  return refresh;
}

autoRefresh();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
