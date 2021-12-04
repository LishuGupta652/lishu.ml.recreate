const router = require("express").Router();
const Post = require("../models/postModel");

// Geet all post
router.get("/", async (req, res) => {
  try {
    const allPost = await Post.find();
    res.send(allPost);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Submit a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  //   post
  //     .save()
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // Method 02
  try {
    const data = await post.save();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// Find a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DElete the post
router.delete("/:postId", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Path the post
router.patch("/:postId", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.postId, req.body, {
      new: true,
    });
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
