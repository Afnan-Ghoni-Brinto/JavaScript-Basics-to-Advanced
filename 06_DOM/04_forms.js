document.getElementById("studentForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    document.getElementById("result").textContent = name ? `Welcome, ${name}!` : "Enter your name.";
});
