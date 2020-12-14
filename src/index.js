require("./models/Candidate");
require("./models/Party");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const candidateRoutes = require("./routes/candidateRoutes");
const partyRoutes = require("./routes/partyRoutes");

const app = express();

app.use(bodyParser.json());
app.use(candidateRoutes);
app.use(partyRoutes);

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});
mongoose.connection.on("error", (err) =>
  console.log("Error connecting to mongo", err)
);

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(process.env.PORT || 3000);
