import {GameChoice} from "./Game";

class Computer {
    score: number = 0;
    computerchoice: GameChoice ;

    options = {
        1: "rock",
        2: "paper",
        3: "scissors",
    }

    getRandomChoice = () => this.computerchoice = this.options[Math.ceil(Math.random() * 3)];

}

export default Computer;