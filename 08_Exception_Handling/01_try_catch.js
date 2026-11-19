try {
    throw new Error("Example error");
} catch (error) {
    console.log("Caught:", error.message);
}
