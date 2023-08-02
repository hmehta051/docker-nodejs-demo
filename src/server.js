import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to My NodeJS Application</h1>");
});

app.listen(8000, () => console.log("Listening on port 8000"));
