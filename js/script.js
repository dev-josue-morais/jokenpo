
function generateKeyframes() {
    const nColors = 150;
    const colors = [];

    for (let i = 0; i < nColors; i++) {
        let r = 255 - Math.round(i * 255 / (nColors - 1));
        let g = 0;
        let b = Math.round(i * 255 / (nColors - 1));
        colors.push(`rgba(${r}, ${g}, ${b}, 0.7)`);
    }

    for (let i = 0; i < nColors; i++) {
        let r = Math.round(i * 255 / (nColors - 1));
        let g = 0;
        let b = 255 - Math.round(i * 255 / (nColors - 1));
        colors.push(`rgba(${r}, ${g}, ${b}, 0.7)`);
    }

    let keyframes = "@keyframes pulseGradient {\n";
    const totalSteps = colors.length;
    const percentageStep = (100 / totalSteps).toFixed(2);

    for (let i = 0; i < totalSteps; i++) {
        const percentage = (i * percentageStep).toFixed(2) + "%";
        keyframes += `    ${percentage} {\n        background: radial-gradient(circle, ${colors.join(", ")});\n    }\n`;

        const firstColor = colors.shift();
        colors.push(firstColor);
    }

    keyframes += `    100% {\n        background: radial-gradient(circle, ${colors.join(", ")});\n    }\n}`;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    document.querySelector('.background').style.animation = 'pulseGradient 5s infinite linear';
} generateKeyframes();






// let randomInt = Math.floor(Math.random() * (toValue - fromValue + 1)) + fromValue;
//     alert(`Número sorteado: ${randomInt}`);


playText = document.querySelector(".playText");
youValue = document.querySelector(".youValue");
sheldonValue = document.querySelector(".sheldonValue");
playTextSpan =document.querySelector(".playTextSpan")
win = 0;
lose = 0;

const itens = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spock"];
const rules = {
    Pedra: {vence: {Lagarto: "Pedra esmaga Lagarto", Tesoura: "Pedra amassa Tesoura"},},
    Papel: {vence: {Pedra: "Papel cobre pedra", Spock: "Papel refuta Spock"},},
    Tesoura: {vence: {Papel: "Tesoura corta Papel", Lagarto: "Tesoura decapita Lagarto"},},
    Lagarto: {vence: {Papel: "Lagarto come Papel", Spock: "Lagarto envenena Spock"},},
    Spock: {vence: {Tesoura: "Spock derrete Tesoura", Pedra: "Spock vaporiza Pedra"},},
}

function randomInt() {
    let random = Math.floor(Math.random() * itens.length);
    return itens[random];
}


function play(item) {
    playText.style.display = "block";
    let random = randomInt()
    if (random === item) {
        playText.innerHTML = `<span class="playTextSpan">Deu Empate</span><br>Sheldon Jogou <span class="playerRandom">${random}</span>`;

    } else if ( rules[item].vence[random]) {
        win++;
        youValue.innerHTML = `${win}`;
        playText.innerHTML = `<span class="playTextSpan">Você Venceu</span><br>Sheldon Jogou <span class="playerRandom"><span class="playerRandom"><br>${rules[item].vence[random]}`;
    } else {
        lose++;
        sheldonValue.innerHTML = `${lose}`;
        playText.innerHTML = `<span class="playTextSpan">Você Perdeu</span><br>Sheldon Jogou <span class="playerRandom"><br>${rules[random].vence[item]}</span>`;
    }
};