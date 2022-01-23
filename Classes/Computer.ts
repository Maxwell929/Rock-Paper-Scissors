class Computer {
    score: number = 0;
    computerchoice: string;

    options = {
        1: "rock",
        2: "paper",
        3: "scissors",
    }

    radomChoice = () =>
        this.computerchoice = this.options[Math.ceil(Math.random() * 3)];



}




export default Computer;