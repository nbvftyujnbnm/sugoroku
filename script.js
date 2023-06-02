let imgId = String;
let playerSpaces = [1,1,1,1];
let count = 0;
let player = 0;


function rollDie() {
    die = Math.floor((Math.random() * 6)) + 1;
    return (die);
}
function roll() {
    let result = rollDie();
    player = (player + 1) % 4;
    playerSpaces[player] += result;
    let playerSpace = playerSpaces[player];

    console.log(player);
    console.log(playerSpaces);
    console.log(playerSpace);
    const target = document.getElementById("result");
    const spaceElement = document.getElementById("space" + String(player));
    
    imgId = `<img class='diceImg' src='img/dice01_a_0${String(result)}.png' style='width: 48px;'>`
    target.innerHTML = imgId;

    if (playerSpace >= 50) {
        spaceElement.innerHTML = "GOAL!"
        playerSpaces[player] = 1;
    } else {
        spaceElement.innerHTML = "You are in " + playerSpace + indicator(playerSpace) + " space";
    }
}
function indicator(i) {
    let cent = i % 100
    if (cent >= 10 && cent <= 20) return 'th'
    let dec = i % 10
    if (dec === 1) return 'st'
    if (dec === 2) return 'nd'
    if (dec === 3) return 'rd'
    return 'th'
}
