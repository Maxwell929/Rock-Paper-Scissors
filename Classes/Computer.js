class Computer {
    constructor() {
        this.score = 0;
        this.options = {
            1: "rock",
            2: "paper",
            3: "scissors",
        };
        this.getRandomChoice = () => this.computerchoice = this.options[Math.ceil(Math.random() * 3)];
    }
}
export default Computer;
//# sourceMappingURL=Computer.js.map