const questions = [
    { q: "Which keyword declares a constant?", options: ["let", "const", "var"], answer: "const" },
    { q: "Which method adds to an array's end?", options: ["push()", "pop()", "shift()"], answer: "push()" },
    { q: "Which operator checks strict equality?", options: ["=", "==", "==="], answer: "===" }
];
let index = 0, score = 0, answered = false;
function showQuestion() {
    answered = false;
    const item = questions[index];
    document.getElementById("question").textContent = item.q;
    document.getElementById("feedback").textContent = "";
    const area = document.getElementById("answers");
    area.replaceChildren();
    item.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            if (answered) return;
            answered = true;
            if (option === item.answer) {
                score++;
                document.getElementById("feedback").textContent = "Correct!";
            } else {
                document.getElementById("feedback").textContent = `Answer: ${item.answer}`;
            }
            document.getElementById("score").textContent = `Score: ${score}/${questions.length}`;
        });
        area.appendChild(button);
    });
}
document.getElementById("next").addEventListener("click", () => {
    if (index < questions.length - 1) { index++; showQuestion(); }
    else {
        document.getElementById("question").textContent = "Quiz finished!";
        document.getElementById("answers").replaceChildren();
        document.getElementById("feedback").textContent = `Final score: ${score}/${questions.length}`;
    }
});
showQuestion();
