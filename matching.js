let firstImageClicked = null
const redImage1 = document.getElementById('red1')
const blueImage1 = document.getElementById('blue1')
const redImage2 = document.getElementById('red2')
const blueImage2 = document.getElementById('blue2')


redImage1.addEventListener('click', cardClick);
blueImage1.addEventListener('click', cardClick);
redImage2.addEventListener('click', cardClick);
blueImage2.addEventListener('click', cardClick);



function cardClick(event) {
    let clickedCard = event.target;


//do ids match

if (firstImageClicked === null) {
    firstImageClicked = clickedCard;
    console.log('first card clicked');
} else {
     if (clickedCard.id === 'red1' && firstImageClicked.id === 'red2') {
        clickedCard.classList.add('matched');
        firstImageClicked.classList.add('matched');
        console.log('images match');
    } else {
        if (clickedCard.id === 'red2' && firstImageClicked.id === 'red1') {
           clickedCard.classList.add('matched');
           firstImageClicked.classList.add('matched');
           console.log('images match');
        } else{
            if (clickedCard.id === 'blue1' && firstImageClicked.id === 'blue2') {
               clickedCard.classList.add('matched');
               firstImageClicked.classList.add('matched');
               console.log('images match');
            } else {
                if (clickedCard.id === 'blue2' && firstImageClicked.id === 'blue1') {
                   clickedCard.classList.add('matched');
                   firstImageClicked.classList.add('matched');
                   console.log('images match');
                } else {
                    if (clickedCard.id === 'yellow1' && firstImageClicked.id === 'yellow2') {
                       clickedCard.classList.add('matched');
                       firstImageClicked.classList.add('matched');
                       console.log('images match');
                    }
                    else {
                        if (clickedCard.id === 'yellow2' && firstImageClicked.id === 'yellow1') {
                           clickedCard.classList.add('matched');
                           firstImageClicked.classList.add('matched');
                           console.log('images match');
                        }
                        else {
                            if (clickedCard.id === 'purple1' && firstImageClicked.id === 'purple2') {
                               clickedCard.classList.add('matched');
                               firstImageClicked.classList.add('matched');
                               console.log('images match');
                            }
                            else {
                                if (clickedCard.id === 'purple2' && firstImageClicked.id === 'purple1') {
                                   clickedCard.classList.add('matched');
                                   firstImageClicked.classList.add('matched');
                                   console.log('images match');
                                } else {
        firstImageClicked = null;
        }
    }}}
}}}}
}}


//stopwatch
var startTime, currentTime, elapsedTime = 0;
var timerInterval;

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10); // Update timer every 10 milliseconds
}

function stop() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("timer").textContent = formatTime(elapsedTime); 
}

function updateTimer() {
  currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  document.getElementById("timer").textContent = formatTime(elapsedTime);  //calculate elapsed time
}

function formatTime(milliseconds) {
  var hours = Math.floor(milliseconds / 3600000);
  var minutes = Math.floor((milliseconds % 3600000) / 60000);
  var seconds = Math.floor((milliseconds % 60000) / 1000);
  var milliseconds = Math.floor((milliseconds % 1000) / 10);

  return (
    pad(hours, 2) +
    ":" +
    pad(minutes, 2) +
    ":" +
    pad(seconds, 2) +
    "." +
    pad(milliseconds, 2)
  );                                        
}

function pad(number, length) {
  var str = String(number);
  while (str.length < length) {
    str = "0" + str;
  }
  return str;                               //add leading zeroes to make time components 2 digits always
}