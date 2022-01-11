import Game from "./Game.js";
import {btns} from "./selectors.js";

// Start the Game

const userName = prompt(
    "Nice to meet you! My name is Max and I created this simple Rock, Paper, Scissor game. \n What's your name? "
);

const game = new Game(userName);

game.init();

btns.forEach(el => {
    el.addEventListener('click', function () {
        const id = this.id;

        const playerChoice: string = game.options[`${id}`];
        const compChoice: string = game.options[`${game.computer.getRandomNumb()}`];

        game.comparison(playerChoice, compChoice);
    });

    game.restart()
});