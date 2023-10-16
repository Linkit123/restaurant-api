const app = require("./src/app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
    path: './config.env'
});

const port = process.env.PORT || 3000;
const database = process.env.DATABASE;

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!! shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// Connect the database
mongoose
  .connect(database)
  .then((con) => {
    console.log("DB connection Successfully!");
  })
  .catch((err) => {
    console.error("Database connection error");
  });

// Start the server
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!!  shutting down ...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
