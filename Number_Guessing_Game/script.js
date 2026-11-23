let secret, attempts;
function start() {
    secret = Math.floor(Math.random() * 20) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "Good luck!";
    document.getElementById("guess").value = "";
}
document.getElementById("check").addEventListener("click", () => {
    const guess = Number(document.getElementById("guess").value);
    const message = document.getElementById("message");
    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
        message.textContent = "Enter a whole number from 1 to 20."; return;
    }
    attempts++;
    if (guess === secret) message.textContent = `Correct in ${attempts} attempts!`;
    else message.textContent = guess < secret ? "Too low. Try again." : "Too high. Try again.";
});
document.getElementById("restart").addEventListener("click", start);
start();
