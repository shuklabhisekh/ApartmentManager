const express = require("express");

const Resident = require("../model/residentModel");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const resident = await Resident.create(req.body);
    return res.status(200).send(resident);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const resident = await Resident.find().lean().exec();
    return res.status(200).send(resident);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const resident = await Resident.findById(req.params.id)
      //   .populate("residentId")
      .lean()
      .exec();
    return res.status(200).send(resident);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const resident = await Resident.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(resident);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
