import express from "express";
import { asyncExitHook } from "exit-hook";

import { CONNECT_DB, CLOSE_DB } from "./config/mongodb.js";
import { env } from "./config/environment.js";

const START_SERVER = () => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({
      message: "Server is running!",
    });
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `Hello ${env.AUTHOR}, server running at http://${env.APP_HOST}:${env.APP_PORT}`,
    );
  });
};

CONNECT_DB()
  .then(() => {
    console.log("Connected to MongoDB");
    START_SERVER();
  })
  .catch((error) => {
    console.error("Cannot connect to MongoDB:", error);
    process.exit(1);
  });

asyncExitHook(
  async () => {
    console.log("Server is shutting down...");
    await CLOSE_DB();
    console.log("MongoDB connection closed.");
  },
  {
    wait: 500,
  },
);
