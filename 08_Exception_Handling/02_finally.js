try {
    console.log("Inside try");
    throw new Error("Something went wrong");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("This block always runs.");
}
