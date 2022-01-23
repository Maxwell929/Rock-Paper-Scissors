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
} from "../selectors/selectors.js";

class Game {

    tiesScore: number = 0;
    rounds: number = 1;
    player: Player;
    computer: Computer;

    constructor(playerName: string) {
        this.player = new Player(playerName);
        this.computer = new Computer();
    }

    comparison = (player: string, computer: string) => {

        if (computer === "rock" && player === "paper" || computer === "paper" && player === "scissors" || computer === "scissors" && player === "rock") {
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
        roundCounter.textContent = `Round ${this.rounds}`;
        this.rounds++;
    }

    playerWins = () => {
        winPlayer.textContent = `${this.player.score}`;
        container1.style.border = 'red solid 0.5rem';
        container3.style.border = 'lightgray solid';
        container1.style.transition = 'all 1s';
        description.textContent = `${this.player.userName} wins this round!`;
    };

    computerWins = () => {
        winComputer.textContent = `${this.computer.score}`;
        container1.style.border = 'lightgray solid';
        container3.style.border = 'red solid 0.5rem';
        container3.style.transition = 'all 1s';
        description.textContent = `Computer wins this round!`;
    };

    noWinner = () => {
        ties.textContent = `${this.tiesScore}`;
        container1.style.border = 'lightgray solid';
        container3.style.border = 'lightgray solid';
        description.textContent = `Nobody wins this round!`;
    };

    domInit = () => {
        this.player.greeting();
        ties.textContent = `${this.tiesScore}`;
        winComputer.textContent = `${this.computer.score}`;
        winPlayer.textContent = `${this.player.score}`;
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
        this.domInit()
    }

    restart = () => btnRestart.addEventListener('click', this.init)
}

export default Game;