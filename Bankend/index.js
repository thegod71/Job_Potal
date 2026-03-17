import dotenv from "dotenv";
dotenv.config({});

import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./utils/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// CORS (Cross Origin Resource Sharing) allows the frontend to access the backend when they run on different ports or domains.

// origin: "http://localhost:5173" → Only this frontend URL is allowed to send requests to the backend.

// credentials: true → Allows cookies, tokens, and login sessions to be sent with requests.

// app.use(cors(corsOptions)) → Applies these CORS rules to the entire Express server.
// This code allows the frontend running on localhost:5173 to communicate with the backend server.aayse me frontend ka reuqest ko block kr deyta hai
const corsOptions = {
  origin: "http://localhost:5173", // here is the port number on which frontend run
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at  ${PORT}`);
});
