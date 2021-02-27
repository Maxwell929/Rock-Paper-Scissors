'use strict';

// GREETING AND ASKING FOR NAME
const userName = prompt(
  "Nice to meet you! My name is Max and I created this simple Rock, Paper, Scissor game. \n What's your name? "
);
// IMAGES
const imgPlayer = document.querySelector('.img-player');
const imgComputer = document.querySelector('.img-computer');

// BUTTONS
const btns = document.querySelectorAll('.button');
const btnRestart = document.querySelector('.button-restart');

// DISPLAYS NAMES AND COUNTERS
const winPlayer = document.querySelector('.Player-win');
const winComputer = document.querySelector('.Computer-win');
const roundCounter = document.querySelector('.Round-counter');
const ties = document.querySelector('.ties');
const greetingDisp = document.querySelector('.greeting');
const namePlayerDisp = document.querySelector('.Player-name');
const previous = document.querySelector('.previous');

// CONTAINER
const container1 = document.querySelector('.container1');
const container3 = document.querySelector('.container3');

// COUNTERS
let winPl, winComp, tiesGame, rounds;

winPl = 0;
winComp = 0;
tiesGame = 0;
rounds = 1;

//////////////////////// FUNCTIONS

// DISPALYING THE PLAYERS NAME
const greeting = () => {
  greetingDisp.textContent = `Hi ${userName}!`;
};

// DISPLAYING PLAYERS NAME IN THE CONTAINER
const namePlayer = () => {
  namePlayerDisp.textContent = userName;
};

// WIN FOR PLAYER

const winPlayerFun = () => {
  winPl++;
  winPlayer.textContent = winPl;
  container1.style.border = 'red solid';
  container1.style.borderWidth = '0.5rem';
  container3.style.border = 'lightgray solid';
  container1.style.transition = 'all 1s';
};

// WIN FOR COMPUTER

const winComputerFun = () => {
  winComp++;
  winComputer.textContent = winComp;
  container3.style.border = 'red solid';
  container3.style.borderWidth = '0.5rem';
  container1.style.border = 'lightgray solid';
  container3.style.transition = 'all 1s';
};

// TIES

const winTiesFun = () => {
  tiesGame++;
  ties.textContent = tiesGame;
  container1.style.border = 'lightgray solid';
  container3.style.border = 'lightgray solid';
};

// INSERT TEXT WINNER PLAYER/COMPUTER/TIES

const insertWinnerPlayer = () => {
  document.querySelector(
    '.Insert-winner'
  ).textContent = `${userName} wins this round!`;
};

const insertWinnerComputer = () => {
  document.querySelector(
    '.Insert-winner'
  ).textContent = `Computer wins this round!`;
};

const insertWinnerties = () => {
  document.querySelector(
    '.Insert-winner'
  ).textContent = `Nobody wins this round!`;
};

// DISPLAYING THE ROUNDSCOUNTER
const addRounds = () => {
  if (rounds <= 1) {
    roundCounter.textContent = `Round 1`;
  } else {
    roundCounter.textContent = `Round ${rounds}`;
  }
};

// INIT FUNCTION

const init = () => {
  winPl = 0;
  winComp = 0;
  tiesGame = 0;
  rounds = 0;
  greeting();
  namePlayer();
  addRounds();
  document.querySelector('.Insert-winner').textContent = `Who wins this round?`;
  imgPlayer.src = 'images/question.png';
  imgComputer.src = 'images/question.png';
  winPlayer.textContent = winPl;
  winComputer.textContent = winComp;
  ties.textContent = tiesGame;
  container1.style.border = 'lightgray solid';
  container3.style.border = 'lightgray solid';
};

// STARTING ALL
init();

// PLAYING THE GAME

btns.forEach(el => {
  el.addEventListener('click', function () {
    const id = this.id;

    // CREATING A RANDOM NUMBER FROM 1 TO 3
    const number = Math.ceil(Math.random() * 3);
    console.log(number);

    // ASSING NUMBERS TO OBJECTS
    const computer = () => {
      if (number === 1) {
        return 'rock';
      } else if (number === 2) {
        return 'paper';
      } else {
        return 'scissor';
      }
    };

    if (id === 'rock' && computer() === 'paper') {
      winComputerFun();
      insertWinnerComputer();
    } else if (id === 'rock' && computer() === 'scissor') {
      winPlayerFun();
      insertWinnerPlayer();
    } else if (id === 'paper' && computer() === 'scissor') {
      winComputerFun();
      insertWinnerComputer();
    } else if (id === 'paper' && computer() === 'rock') {
      winPlayerFun();
      insertWinnerPlayer();
    } else if (id === 'scissor' && computer() === 'rock') {
      winComputerFun();
      insertWinnerComputer();
    } else if (id === 'scissor' && computer() === 'paper') {
      winPlayerFun();
      insertWinnerPlayer();
    } else {
      winTiesFun();
      insertWinnerties();
    }

    // CHANGING SRC TO
    imgComputer.src = `images/${computer()}.png`;

    imgPlayer.src = `images/${id}.png`;

    // ROUNDING UP THE NUMBER OF ROUNDS BY 1 AND CHANGING IT
    rounds++;

    addRounds();

    // previous.textContent = `${userName}:${id} vs. Computer:${computer()}`;
  });
});

// RESTART THE GAME

btnRestart.addEventListener('click', init);
