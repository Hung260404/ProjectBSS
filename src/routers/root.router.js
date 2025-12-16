const express = require("express");

const authRouter = require("./auth.router");
const userRouter = require("./user.router");
const categoryRouter = require("./category.router");
const serviceRouter = require("./service.router");
const scheduleRouter = require("./schedule.router");

const rootRouter = express.Router();

// Auth & User
rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);

// Service Management
rootRouter.use("/categories", categoryRouter);
rootRouter.use("/services", serviceRouter);
rootRouter.use("/schedules", scheduleRouter);

module.exports = rootRouter;
