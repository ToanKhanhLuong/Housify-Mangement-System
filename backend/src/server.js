

import express from "express";
import exitHook from "exit-hook";
import { CONNECT_DB, CLOSE_DB } from "./config/mongodb";
import { env } from "./config/environment";

const START_SERVER = () => {
  const app = express();

  app.get("/", async (req, res) => {
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hello ${env.AUTHOR}, I am running at ${env.APP_HOST}:${env.APP_PORT}/`,
    );
  });

  exitHook(() => {
    console.log(`4. Server is Shouldown..`);
    CLOSE_DB();
    console.log(`5. Disconect Mongo cloud Altas`);
  });
};

(async () => {
  try {
    console.log("1.Connected to MongoDB Cloud Atlas!");
    await CONNECT_DB();
    console.log("2.Connected to MongoDB Cloud Atlas!");
    // Khởi động server backend khi kết nối thành công
    START_SERVER();
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
})();

// CONNECT_DB()
//   .then(() => console.log("Connected to MongoDB Cloud Atlas!"))
//   .then(() => START_SERVER())
//   .catch((error) => {
//     console.error(error);
//     process.exit(0);
//   });
