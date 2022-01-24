import Player from "./Player.js";
import Computer from "./Computer.js";
import {
    btnRestart,
    computerPlayerBox,
    computerPlayerImage,
    description,
    humanPlayerBox,
    humanPlayerImage,
    roundCounter,
    tiesCounter,
    winComputer,
    winPlayer
} from "../selectors/selectors.js";

type GameWinner = "player" | "computer" | "ties";
export  type GameChoice = "rock" | "paper" | "scissors";

class Game {

    tiesScore: number = 0;
    rounds: number = 1;
    player: Player;
    computer: Computer;

    constructor(playerName: string) {
        this.player = new Player(playerName);
        this.computer = new Computer();
        this.play(document.querySelector(".humanPlayer__choices"));
        this.restart();
    }

    play = (buttonElem: HTMLElement) => {
        buttonElem.onclick = this.onClick.bind(this);
    }

    onClick(event) {
        const choicePlayer = this.player.choice = event.target.dataset.choice;
        if (choicePlayer) {
            const choiceComputer = this.computer.getRandomChoice();
            this.renderGameResult(this.getWinner(choicePlayer, choiceComputer));
            computerPlayerImage.src = `images/${choiceComputer}.png`;
            humanPlayerImage.src = `images/${choicePlayer}.png`;
        }
    }

    getWinner = (playerChoice: GameChoice, computerChoice: GameChoice): GameWinner => {

        if (computerChoice === "rock" && playerChoice === "paper" || computerChoice === "paper" && playerChoice === "scissors" || computerChoice === "scissors" && playerChoice === "rock") {
            return "player";
        } else if (playerChoice === computerChoice) {
            return "ties";
        } else {
            return "computer";
        }
    }

    renderGameResult = (winner: GameWinner): void => {
        this.rounds++;
        roundCounter.textContent = `Round ${this.rounds}`;

        if (winner === "player") {
            this.player.score++;
            this.playerWins();
            description.textContent = `${this.player.userName} wins this round!`;
        } else if (winner === "computer") {
            this.computer.score++;
            this.computerWins();
        } else {
            this.tiesScore++;
            this.noWinner();
        }
    };

    playerWins = () => {
        winPlayer.textContent = `${this.player.score}`;
        humanPlayerBox.classList.add('player--has-won');
        computerPlayerBox.classList.remove("computer--has-won");
    };

    computerWins = () => {
        winComputer.textContent = `${this.computer.score}`;
        description.textContent = `Computer wins this round!`;
        computerPlayerBox.classList.add("computer--has-won");
        humanPlayerBox.classList.remove('player--has-won');
    };

    noWinner = () => {
        tiesCounter.textContent = `${this.tiesScore}`;
        humanPlayerBox.classList.remove("player--has-won");
        computerPlayerBox.classList.remove("computer--has-won");
        description.textContent = `Nobody wins this round!`;
    };

    newGame = () => {
        tiesCounter.textContent = `${this.tiesScore = 0}`;
        winComputer.textContent = `${this.computer.score = 0}`;
        winPlayer.textContent = `${this.player.score = 0}`;
        tiesCounter.textContent = `${this.tiesScore = 0}`;
        roundCounter.textContent = `Round ${this.rounds = 1}`;
        description.textContent = `Who wins this round?`;
        humanPlayerBox.classList.remove('player--has-won');
        computerPlayerBox.classList.remove("computer--has-won");
        humanPlayerImage.src = 'images/question.png';
        computerPlayerImage.src = 'images/question.png';
    }

    restart = () => btnRestart.addEventListener('click', this.newGame)
}

export default Game;