const heading = document.getElementById("heading");
const description = document.querySelector(".description");
console.log(heading.textContent, description.textContent);
document.getElementById("change").addEventListener("click", () => {
    heading.textContent = "The DOM has been updated!";
});
