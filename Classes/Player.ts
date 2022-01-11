import {greetingDisp} from "../selectors/selectors.js";

class Player {

    userName: string;
    score: number = 0;

    constructor(name: string) {
        this.userName = name;
    }

    greeting = () => {
        greetingDisp.textContent = `Hi ${this.userName}!`;
    };
}

export default Player;