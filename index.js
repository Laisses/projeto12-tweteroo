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

app.get("/tweets", (_req, res) => {
    const tweets = TWEETS.slice(TWEETS.length - 10);
    res.status(200).send(tweets);
});

app.get("/tweets/:user", (req, res) => {
    const { user } = req.params;
    const tweetsUser = TWEETS.filter(t => user === t.username);
    res.status(200).send(tweetsUser);
});

app.post("/sign-up", (req, res) => {
    const {username, imageURL} = req.body;
    USERS[username] = imageURL;
    res.sendStatus(201);
});