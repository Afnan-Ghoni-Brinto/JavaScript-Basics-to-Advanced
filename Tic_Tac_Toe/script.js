const cells = [...document.querySelectorAll("#board button")];
const status = document.getElementById("status");
const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let player = "X", over = false;
function hasWinner() {
    return wins.some(([a,b,c]) => cells[a].textContent &&
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent);
}
cells.forEach(cell => cell.addEventListener("click", () => {
    if (over || cell.textContent) return;
    cell.textContent = player;
    if (hasWinner()) { status.textContent = `Player ${player} wins!`; over = true; }
    else if (cells.every(item => item.textContent)) { status.textContent = "It's a draw!"; over = true; }
    else { player = player === "X" ? "O" : "X"; status.textContent = `Player ${player}'s turn`; }
}));
document.getElementById("reset").addEventListener("click", () => {
    cells.forEach(cell => cell.textContent = "");
    player = "X"; over = false; status.textContent = "Player X's turn";
});
