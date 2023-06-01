const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// routes
const userRouting = require("./routes/user.route");

const sumEvenNumbers = require("./services");

const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function printMessage() {
  console.log("QUERY RUNNING");
}

const uri =
  "mongodb+srv://sharad:RmUBeY4bqmIpnPih@cluster0.kax3a2r.mongodb.net/testdb";

setInterval(printMessage, 5000);
app.use(cors());

app.use("/users", userRouting);
app.use("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/get-sum-of-event-numbers", (req, res) => {
  console.log(req.body);
  const { numbers } = req.body;
  const result = sumEvenNumbers(numbers || [1, 2, 3, 4, 5, 6]);
  res.status(200).json({
    sum: result,
  });
});

app.use((error, req, res) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data || [];
  res.status(status).json({
    message,
    data,
  });
});

// Connect to MongoDB Atlas
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });
