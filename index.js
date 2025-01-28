const express = require("express");
const cors = require("cors");

const app = express();
const Port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  const currentDate = new Date.toISOString();
  const response = {}
});

app.listen(Port, () => {
  console.log(`API is running fresh @ http://localhost:${Port}`);
});
