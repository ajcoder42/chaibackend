require("dotenv").config();

const express = require("express");
// import express from "express";
const app = express();
const port = 4000;

const myPortfolio = [
  {
    firstName: "abhishek",
    lastName: "jha",
  },
  {
    age: 23,
  },
  {
    course: "Btech",
    branch: "IT",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twitterdotcom");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Abhishek Tech Aspirant</h2>");
});

app.get("/login", (req, res) => {
  res.send("<h1>please Login to chai aur code</h1>");
});

app.get("/portfolio", (req, res) => {
  res.json(myPortfolio);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
