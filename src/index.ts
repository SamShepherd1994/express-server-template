/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as dotenv from "dotenv";
// Must be done as early as possible
dotenv.config();
import express from "express";
import cors from "cors";
import chalk from "chalk";
import http from "http";
import helmet from "helmet";
import compression from "compression";

// Set some environmental variables
const SERVER_PORT = process.env.PORT || 3500;
export const serverUrl =
    process.env.NODE_ENV === "development"
        ? `http://localhost:${SERVER_PORT}`
        : "";

// Create an express server
const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(helmet());
    app.use(compression());
}

// Add support for CORS
app.use(cors());

async function start() {
    const httpServer = http.createServer(app);
    httpServer.listen(SERVER_PORT, () => {
        console.log(
            `${chalk.cyan("Server")} running at ${chalk.green(`${serverUrl}`)}`
        );
    });
    httpServer.setTimeout(30000);
}

start().then(async () => {
    console.log("server started successfully.");
});
