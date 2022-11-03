import express from "express";
import cors from 'cors';
import { USERS, TWEETS } from "./mock-data.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log("server running");
});

app.get("/tweets", (req, res) => {
    const page = req.query.page;
    if (page < 1) {
        res.status(400).send("Informe uma página válida!");
        return;
    }
    const limit = 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const tweets = TWEETS.slice(startIndex, endIndex);
    res.status(200).send(tweets);
});

app.get("/tweets/:user", (req, res) => {
    const { user } = req.params;
    const tweetsUser = TWEETS.filter(t => user === t.username);
    res.status(200).send(tweetsUser);
});

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    const regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    if (username.length === 0 || avatar.length === 0) {
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    } else if (!regex.test(avatar)) {
        res.status(400).send("A foto deve ser uma URL!");
        return;
    }

    USERS[username] = avatar;
    res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
    const username = req.headers.user;
    const { tweet } = req.body;
    const avatar = USERS[username];
    TWEETS.unshift({username, tweet, avatar});
    res.status(201).send("OK");
});
