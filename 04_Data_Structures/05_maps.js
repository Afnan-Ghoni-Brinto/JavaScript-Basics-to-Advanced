const marks = new Map();
marks.set("Rahim", 85);
marks.set("Karim", 90);
console.log(marks.get("Rahim"), marks.has("Karim"));
for (const [name, mark] of marks) console.log(name, mark);
