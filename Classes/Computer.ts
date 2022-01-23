class Computer {
    score: number = 0;
    computerchoice: string = "";

    constructor() {
        this.radomChoice();
    }
    options = {
        1: "rock",
        2: "paper",
        3: "scissors",
    }

    radomChoice = () => {
        return this.computerchoice = this.options[Math.ceil(Math.random() * 3)];

    }
}


export default Computer;