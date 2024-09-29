import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 420;

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://Jayce:PDIDDY@mernapp.qhyogvg.mongodb.net/?retryWrites=true&w=majority&appName=mernapp";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use("/financial-records, financialRecordRouter"); //extension alternative to access endpoint in financial-records.ts. Double check this.

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
