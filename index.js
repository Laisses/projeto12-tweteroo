import express from "express";
import cors from 'cors';
import { USERS, TWEETS } from "./mock-data.js";

const app = express();

app.use(cors());

app.listen(5000, () => {
    console.log("server running");
});

app.get("/tweets", (_req, res) => {
    const tweets = TWEETS.slice(TWEETS.length - 10);
    res.status(200).send(tweets);
});
