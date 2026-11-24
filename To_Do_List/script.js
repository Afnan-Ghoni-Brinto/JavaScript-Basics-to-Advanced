const form = document.getElementById("form");
const input = document.getElementById("task");
const list = document.getElementById("list");

function save() {
    const tasks = [...list.children].map(li => ({
        text: li.querySelector("span").textContent,
        done: li.classList.contains("done")
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTask(text, done = false) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const complete = document.createElement("button");
    const remove = document.createElement("button");
    span.textContent = text;
    complete.textContent = "Done";
    remove.textContent = "Delete";
    if (done) li.classList.add("done");
    complete.addEventListener("click", () => { li.classList.toggle("done"); save(); });
    remove.addEventListener("click", () => { li.remove(); save(); });
    li.append(span, complete, remove);
    list.appendChild(li);
}
form.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addTask(text);
    input.value = "";
    save();
});
JSON.parse(localStorage.getItem("tasks") || "[]").forEach(task => addTask(task.text, task.done));
