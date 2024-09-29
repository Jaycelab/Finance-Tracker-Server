import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://Jayce:password@mernapp.qhyogvg.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter); //extension alternative to access endpoint in financial-records.ts. Double check this.

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
