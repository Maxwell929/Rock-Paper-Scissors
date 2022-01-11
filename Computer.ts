class Computer {
    score: number = 0;
    randomNumb: number;

    getRandomNumb = () =>
        this.randomNumb = Math.ceil(Math.random() * 3);
}

export default Computer;