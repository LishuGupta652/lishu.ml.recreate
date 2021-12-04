const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// Connecting to the database
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to database");
});

// Importing the routes
const postRoutes = require("./routes/postRoutes");
const dataRoutes = require("./routes/dataRoutes");
// Using middleware for parsing the body of the request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using the routes as middlesware
app.use("/api/posts", postRoutes);
app.use("/api/blog/", dataRoutes);
// using main routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
    routes: {
      allpost: "/api/posts",
      postingroute: "/api/posts",
      specific: "api/posts/:id",
      delete: "/api/posts/:id",
      patch: "/api/posts/:id",
    },
    blogRoute: {
      blog: "/api/blog/v1",
    },
    schema: {
      post: {
        title: "string",
        content: "string",
      },
    },
  });
});

// Listening to the port
app.listen(PORT, () => console.log(`App live on http://localhost:${PORT}`));
