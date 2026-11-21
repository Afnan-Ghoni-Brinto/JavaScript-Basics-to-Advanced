document.getElementById("save").addEventListener("click", () => {
    localStorage.setItem("userName", document.getElementById("name").value);
});
document.getElementById("show").addEventListener("click", () => {
    document.getElementById("result").textContent =
        localStorage.getItem("userName") || "No name saved.";
});
