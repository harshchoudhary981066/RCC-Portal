const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const db = require("./app/models/index");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// cors route setup
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const usersRouter = require("./app/routes/users.routes");
const eventsRouter = require("./app/routes/events.routes");
const mentorsRouter = require("./app/routes/mentors.routes");
const attendanceRouter = require("./app/routes/attendance.routes");

app.use("/api/users", usersRouter);
app.use("/api/events", eventsRouter);
app.use("/api/mentors", mentorsRouter);
app.use("/api/attendance", attendanceRouter);

const token = require("./app/middleware/token");

app.get("/test-token", (req, res, next) => {
  res.json({
    message: "token is working",
    encrypt: token.generateToken(1),
  });

  next();
});

// test api
app.use("*", (req, res) => {
  res.status(201).json({
    message: "root route",
  });
});

module.exports = app;
