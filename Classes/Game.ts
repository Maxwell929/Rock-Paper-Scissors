import Player from './Player.js';
import Computer from './Computer.js';

type GameWinner = 'player' | 'computer' | 'ties';
export  type GameChoice = 'rock' | 'paper' | 'scissors';

class Game {
    element: Element;
    tiesScore: number = 0;
    rounds: number = 1;
    player: Player;
    computer: Computer;

    constructor(element: Element, playerName: string) {
        this.element = element;
        this.player = new Player(playerName);
        this.computer = new Computer();
        const choicesElement = element.querySelector('.humanPlayer__choices');
        choicesElement.addEventListener('click', (e) => this.onClick(e));

        const btnRestart = element.querySelector('.button--restart');
        btnRestart.addEventListener('click', this.newGame)
    }

    onClick(e) {
        const choicePlayer = e.target.dataset.choice;
        if (!choicePlayer) {
            return;
        }

        const choiceComputer = this.computer.getRandomChoice();
        this.setPlayerImagChoice('computer', choiceComputer);
        this.setPlayerImagChoice('human', choicePlayer);
        const winner = this.getWinner(choicePlayer, choiceComputer);
        this.applyGameResult(winner);
        this.renderGameResult(winner);
    }

    getWinner = (playerChoice: GameChoice, computerChoice: GameChoice): GameWinner => {
        if (computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissors' || computerChoice === 'scissors' && playerChoice === 'rock') {
            return 'player';
        } else if (playerChoice === computerChoice) {
            return 'ties';
        } else {
            return 'computer';
        }
    }

    setPlayerImagChoice(player: 'human' | 'computer', choice: GameChoice | 'question') {
        const image = this.element.querySelector<HTMLImageElement>(`.${player}Player__image`);
        image.src = `images/${choice}.png`;
    }

    applyGameResult(winner: GameWinner): void {
        this.rounds++;

        if (winner === 'player') {
            this.player.score++;
        } else if (winner === 'computer') {
            this.computer.score++;
        } else {
            this.tiesScore++;
        }
    }

    renderGameResult(winner: GameWinner | 'initial'): void {
        // DISPLAYS NAMES AND COUNTERS
        const winPlayer = this.element.querySelector('.player__win-counter');
        const winComputer = this.element.querySelector('.computer__win-counter');
        const roundCounter = this.element.querySelector('.round__counter');
        const tiesCounter = this.element.querySelector('.ties__counter');
        winPlayer.textContent = `${this.player.score}`;
        winComputer.textContent = `${this.computer.score}`;
        roundCounter.textContent = `Round ${this.rounds}`;
        tiesCounter.textContent = `${this.tiesScore}`;

        // CONTAINER
        const description = this.element.querySelector(
            '.current-winner'
        );
        const humanPlayerBox = this.element.querySelector<HTMLElement>('.player');
        const computerPlayerBox = this.element.querySelector<HTMLElement>('.computer');

        if (winner === 'initial') {
            description.textContent = `Who wins this round?`;
            humanPlayerBox.classList.remove('player--has-won');
            computerPlayerBox.classList.remove('computer--has-won');
        } else if (winner === 'player') {
            description.textContent = `${this.player.userName} wins this round!`;
            humanPlayerBox.classList.add('player--has-won');
            computerPlayerBox.classList.remove('computer--has-won');
        } else if (winner === 'computer') {
            description.textContent = `Computer wins this round!`;
            computerPlayerBox.classList.add('computer--has-won');
            humanPlayerBox.classList.remove('player--has-won');
        } else {
            description.textContent = `Nobody wins this round!`;
            humanPlayerBox.classList.remove('player--has-won');
            computerPlayerBox.classList.remove('computer--has-won');
        }
    };

    newGame = () => {
        this.rounds = 1;
        this.tiesScore = 0;
        this.player.score = 0;
        this.computer.score = 0;

        this.setPlayerImagChoice('computer', 'question');
        this.setPlayerImagChoice('human', 'question');
        this.renderGameResult('initial');
    }
}

export default Game;