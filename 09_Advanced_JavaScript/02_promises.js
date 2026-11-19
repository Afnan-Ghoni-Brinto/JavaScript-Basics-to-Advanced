const task = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("Task completed");
    else reject(new Error("Task failed"));
});
task.then(console.log).catch(error => console.error(error.message));
