const { app } = require("./main");

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log("server started at post " + PORT);
})