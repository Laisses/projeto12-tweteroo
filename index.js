import express from "express";
import cors from 'cors';
import { USERS, TWEETS } from "./mock-data.js";

const app = express();

app.use(cors());

app.listen(5000, () => {
    console.log("server running");
});

