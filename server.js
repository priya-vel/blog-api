const { app } = require("./main");

/**
 * This refers to the port used by the application
 */
const PORT = process.env.PORT;

/**
 * Starting application by refering to port
 */
app.listen(PORT, () => {
    console.log("server started at post " + PORT);
})