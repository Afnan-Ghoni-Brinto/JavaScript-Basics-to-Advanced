document.getElementById("calculate").addEventListener("click", () => {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const op = document.getElementById("op").value;
    let result;
    if (op === "+") result = a + b;
    else if (op === "-") result = a - b;
    else if (op === "*") result = a * b;
    else if (b === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero.";
        return;
    } else result = a / b;
    document.getElementById("result").textContent = `Result: ${result}`;
});
