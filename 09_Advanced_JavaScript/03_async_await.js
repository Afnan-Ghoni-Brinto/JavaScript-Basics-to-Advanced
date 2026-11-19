const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function main() {
    console.log("Starting...");
    await wait(1000);
    console.log("Finished after one second.");
}
main();
