let space = 1;
let imgId = String;
function rollDie() {
    die = Math.floor((Math.random() * 6)) + 1;
    return (die);
}
function roll() {
    const target = document.getElementById("result");
    const spaceElement = document.getElementById("space");
    let result = rollDie();
    space += result;
    imgId = `<img class='diceImg' src='/img/dice01_a_0${String(result)}.png' style='width: 48px;'>`
    target.innerHTML = imgId;
    if (space >= 50) {
        spaceElement.innerHTML = "GOAL!<br>Roll a die to restart."
        space = 1;
    } else {
        spaceElement.innerHTML = "You are in " + space + indicator(space) + " space";
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