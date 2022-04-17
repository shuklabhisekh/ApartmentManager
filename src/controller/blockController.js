const express = require("express");

const Block = require("../model/blockModel");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const block = await Block.create(req.body);
    return res.status(200).send(block);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const block = await Block.find()
      .populate({ path: "flatId", select: ["flatNo", "flatType"] })
      .populate({ path: "residentId", select: ["name", "gender", "age"] })
      .lean()
      .exec();
    return res.status(200).send(block);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const block = await Block.findById(req.params.id).lean().exec();
    return res.status(200).send(block);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const block = await Block.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(block);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
