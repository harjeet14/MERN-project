import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from './Routes/student.js';

const app = express();
app.use('/Student', studentRoutes);
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.subscribe(cors());


const CONNECTION_URL = "mongodb+srv://skillsBuild:skills@cluster0.l4z9y.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {

}).then(() => app.listen(PORT, () =>
  console.log(`connection is running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));

