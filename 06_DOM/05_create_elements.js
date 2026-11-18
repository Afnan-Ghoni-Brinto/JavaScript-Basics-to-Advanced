document.getElementById("add").addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "New list item";
    document.getElementById("list").appendChild(item);
});
