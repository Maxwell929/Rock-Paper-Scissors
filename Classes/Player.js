const greetingHumanPlayer = document.querySelector('.greeting');
class Player {
    constructor(name) {
        this.score = 0;
        this.choice = "";
        this.greetPlayer = () => greetingHumanPlayer.textContent = `Hi ${this.userName}!`;
        this.userName = name;
        this.greetPlayer();
    }
}
export default Player;
//# sourceMappingURL=Player.js.map