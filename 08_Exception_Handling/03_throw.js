function checkAge(age) {
    if (age < 0) throw new Error("Age cannot be negative.");
    return "Age accepted";
}
try { console.log(checkAge(20)); console.log(checkAge(-2)); }
catch (error) { console.log(error.message); }
