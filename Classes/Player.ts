const greetingHumanPlayer = document.querySelector('.greeting');

class Player {

    userName: string;
    score: number = 0;
    choice: string = "";

    constructor(name: string) {
        this.userName = name;
        this.greetPlayer();
    }

    greetPlayer = () => greetingHumanPlayer.textContent = `Hi ${this.userName}!`

}

export default Player;