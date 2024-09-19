const widthContainerDisplay = 798;
const heightContainerDisplay = 798;
const boxHeight = heightContainerDisplay / 3;
const boxWidth = widthContainerDisplay / 3;

const mainDisplay = document.getElementById("main-display");
const playerDisplay = document.getElementById("player-turn");

const circleImage = `<i class="fa-solid fa-o fa-9x" style="color: green;"></i>`;
const xMarkImage = `<i class="fa-solid fa-xmark fa-10x" style="color: blue;"></i>`;

let currentPlayer;

for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.classList.add(`box${i}`);
    div.style.width = `${boxWidth}px`;
    div.style.height = `${boxHeight}px`;
    div.setAttribute("boxNumber", i);
    mainDisplay.append(div);
}

let listBox = document.querySelectorAll(".box");

listBox.forEach(box => {
    box.addEventListener('click', function () {
        if (!box.getAttribute('data-player')) {
            if (turnPlayer() === "Circle") {
                box.innerHTML = circleImage;
                box.setAttribute('data-player', 'Circle');
            } else {
                box.innerHTML = xMarkImage;
                box.setAttribute('data-player', 'X');
            }

            switchTurn();

            winTest();
        }
    });
});

function whoIsTurnRandom() {
    let random = Math.floor(Math.random() * 2);
    return random === 0 ? "Circle" : "X";
}

function gameStart() {
    currentPlayer = whoIsTurnRandom();
    playerDisplay.innerText = currentPlayer;
}

gameStart();

function turnPlayer() {
    return currentPlayer;
}

function switchTurn() {
    currentPlayer = currentPlayer === "Circle" ? "X" : "Circle";
    playerDisplay.innerText = currentPlayer;
}

let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function winTest() {
    winCombos.forEach(combo => {
        const [a, b, c] = combo;
        if (
            listBox[a].getAttribute('data-player') === listBox[b].getAttribute('data-player') &&
            listBox[a].getAttribute('data-player') === listBox[c].getAttribute('data-player') &&
            listBox[a].getAttribute('data-player') !== null
        ) {
            setTimeout(() => {
                alert(`Player ${listBox[a].getAttribute('data-player')} wins!`);
                resetGame();
            }, 250);
        }
    });

    if (isBoardFull() && !isWinnerFound()) {
        setTimeout(() => {
            alert("It's a draw!");
            resetGame();
        }, 1000);
    }
}

function isBoardFull() {
    return [...listBox].every(box => box.getAttribute('data-player') !== null);
}

function resetGame() {
    listBox.forEach(box => {
        box.innerHTML = "";
        box.removeAttribute('data-player');
    });
    gameStart();
}

function isWinnerFound() {
    return winCombos.some(combo => {
        const [a, b, c] = combo;
        return (
            listBox[a].getAttribute('data-player') === listBox[b].getAttribute('data-player') &&
            listBox[a].getAttribute('data-player') === listBox[c].getAttribute('data-player') &&
            listBox[a].getAttribute('data-player') !== null
        );
    });
}
