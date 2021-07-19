const express = require("express");
const app = express();
app.use(express.static("docs"))
const PORT = 9000;
app.listen(PORT, () => console.log(`Documentation running at PORT ${PORT}`))