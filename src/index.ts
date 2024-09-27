import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 420;

app.use(express.json());

// const mongoURI: string = "mongodb://localhost:27017/doinglaterbecauseLazy ";
