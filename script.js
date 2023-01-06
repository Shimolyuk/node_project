import express from "express";
import router from "./routes.js"
import bodyParser from "body-parser";


const app = express();

const port = 3010;

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${3010}, have a successfull project`)
})

app.get('/api', (req, res) => {
res.send("Welcome to the world of Roma's movie characters")
})

app.use(bodyParser.json());

app.use("/api/characters", router);
