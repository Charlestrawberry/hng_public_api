const express = require("express");
const cors = require("cors");

const app = express();
const Port = process.env.PORT || 3009;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const currentDate = new Date().toISOString();
  const response = {
    email: "charlestrawb_odus@yahoo.com",
    current_datetime: currentDate,
    github_url: "https://github.com/charlestrawberry/hng_public_api",
  };
  res.status(200).json(response);
});

app.listen(Port, () => {
  console.log(`API is running fresh @ http://localhost:${Port}`);
});
