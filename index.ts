import Game from "./Classes/Game.js";
import {btns} from "./selectors/selectors.js";

const userName = prompt(
    "Nice to meet you! My name is Max and I created this simple Rock, Paper, Scissor game. \n What's your name? "
);

const game = new Game(userName);

game.init();

btns.forEach(el => {
    el.addEventListener('click', function () {

        const playerChoice: string = this.dataset.choice;
        const compChoice: string = game.computer.radomChoice();

        game.comparison(playerChoice, compChoice);
    });

    game.restart()
});