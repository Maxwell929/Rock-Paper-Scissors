import Game from "./Classes/Game.js";
const userName = prompt("Nice to meet you! My name is Max and I created this simple Rock, Paper, Scissor game. \n What's your name? ");
Array.from(document.querySelectorAll('.game')).forEach(el => {
    new Game(el, userName);
});
//# sourceMappingURL=index.js.map