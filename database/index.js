const mongoose = require("mongoose");

exports.clientPromise = mongoose
  .connect(process.env.MONGODB_URI)
  .then((client) => {
    console.log("Connected to MongoDB");
    return client;
  })
  .catch((err) => {
    console.log(err);
  });
