
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


botRandom = document.getElementsByClassName("botRandom");
youValue = document.getElementsByClassName("youValue");
sheldonValue = document.getElementsByClassName("sheldonValue");

const itens = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spok"];



function randomInt() {
    let random = Math.floor(Math.random() * itens.length);
    return itens[random];
}

function play(item) {
};