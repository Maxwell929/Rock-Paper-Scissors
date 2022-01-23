import Game from "./Classes/Game.js";

const userName = prompt(
    "Nice to meet you! My name is Max and I created this simple Rock, Paper, Scissor game. \n What's your name? "
);

const game = new Game(userName);