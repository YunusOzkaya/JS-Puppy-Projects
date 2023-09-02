const boxEls = document.querySelectorAll(".box");
const scoreEl = document.getElementById("score-el");
let trigger = true;
let gameWon = false;

const boxes = [];
for (let i = 1; i <= 9; i++) {
    boxes[i] = document.getElementById(`box${i}`);
}


for (const item of boxEls) {
    item.addEventListener("click", handleClick);
}




function handleClick(event) {
    const target = event.target;
    if (!target.textContent && trigger && !gameWon) {
        target.textContent = "X";
        trigger = false;
    } else if (!target.textContent && !trigger && !gameWon) {
        target.textContent = "O";
        trigger = true;
    }
    if (winGame()) {
        scoreEl.textContent = `${target.textContent} has won!`;
        gameWon = true;
        removeClickListeners();
    }
}


function winGame() {
    for (let i = 1; i <= 7; i += 3) {
        if (
            boxes[i].textContent !== "" &&
            boxes[i].textContent === boxes[i + 1].textContent &&
            boxes[i + 1].textContent === boxes[i + 2].textContent
        ) {
            return true;
        }
    }
    for (let i = 1; i <= 3; i++) {
        if (
            boxes[i].textContent !== "" &&
            boxes[i].textContent === boxes[i + 3].textContent &&
            boxes[i + 3].textContent === boxes[i + 6].textContent
        ) {
            return true;
        }
    }
    if (
        boxes[1].textContent !== "" &&
        boxes[1].textContent === boxes[5].textContent &&
        boxes[5].textContent === boxes[9].textContent
    ) {
        return true;
    }
    if (
        boxes[3].textContent !== "" &&
        boxes[3].textContent === boxes[5].textContent &&
        boxes[5].textContent === boxes[7].textContent
    ) {
        return true;
    }
    return false;
}


function removeClickListeners() {
    for (const item of boxEls) {
        item.removeEventListener("click", handleClick);
    }
}


function clearBoard() {
    for (let i = 1; i <= 9; i++) {
        boxes[i].textContent = "";
    }
    gameWon = false
    scoreEl.textContent = "Who will win?";
    for (const item of boxEls) {
        item.addEventListener("click", handleClick);
    }

}
