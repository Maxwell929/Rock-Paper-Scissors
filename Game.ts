import Player from "./Player.js";
import Computer from "./Computer.js";
import {
    btnRestart,
    container1,
    container3,
    description,
    imgComputer,
    imgPlayer,
    roundCounter,
    ties,
    winComputer,
    winPlayer
} from "./selectors.js";

class Game {

    tiesScore: number = 0;
    rounds: number = 1;
    player: Player;
    computer: Computer;

    options = {
        1: "rock",
        2: "paper",
        3: "scissor",
    }

    constructor(playerName: string) {
        this.player = new Player(playerName);
        this.computer = new Computer();
    }

    comparison = (player: string, computer: string) => {

        if (computer === this.options["1"] && player === this.options["2"] || computer === this.options["2"] && player === this.options["3"] || computer === this.options["3"] && player === this.options["1"]) {
            this.player.score++;
            this.playerWins();
        } else if (player === computer) {
            this.tiesScore++;
            this.noWinner();
        } else {
            this.computer.score++;
            this.computerWins();
        }

        imgComputer.src = `images/${computer}.png`;
        imgPlayer.src = `images/${player}.png`;

        this.rounds++;
        roundCounter.textContent = `Round ${this.rounds}`;
    }

    playerWins = () => {
        winPlayer.textContent = `${this.player.score}`;
        container1.style.border = 'red solid';
        container1.style.borderWidth = '0.5rem';
        container3.style.border = 'lightgray solid';
        container1.style.transition = 'all 1s';
        description.textContent = `${this.player.userName} wins this round!`;
    };

    computerWins = () => {
        winComputer.textContent = `${this.computer.score}`;
        container3.style.border = 'red solid';
        container3.style.borderWidth = '0.5rem';
        container3.style.transition = 'all 1s';
        description.textContent = `Computer wins this round!`;
    };

    noWinner = () => {
        ties.textContent = `${this.tiesScore}`;
        container1.style.border = 'lightgray solid';
        container3.style.border = 'lightgray solid';
        description.textContent = `Nobody wins this round!`;
    };

    css = () => {
        this.player.greeting();
        ties.textContent = `${this.tiesScore}`;
        winComputer.textContent = `${this.computer.score}`;
        description.textContent = `Who wins this round?`;
        imgPlayer.src = 'images/question.png';
        imgComputer.src = 'images/question.png';
        ties.textContent = `${this.tiesScore}`;
        container1.style.border = 'lightgray solid';
        container3.style.border = 'lightgray solid';
        roundCounter.textContent = `Round ${this.rounds}`;
    };

    init = () => {
        this.rounds = 1;
        this.player.score = 0;
        this.tiesScore = 0;
        this.computer.score = 0;
        this.css()
    }

    restart = () => btnRestart.addEventListener('click', this.init)
}

export default Game;