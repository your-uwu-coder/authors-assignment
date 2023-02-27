const express = require("express");
const cors = require('cors');
const app = express();

require("./config/mongoose.config");

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

const authorRoutes = require("./routes/author.routes");
authorRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));