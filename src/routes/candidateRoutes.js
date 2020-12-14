const express = require("express");
const mongoose = require("mongoose");

const Candidate = mongoose.model("Candidate");

const router = express.Router();

router.get("/candidates", async (req, res) => {
  const partyId = req.query.partyId || null;

  const candidates = partyId
    ? await Candidate.find({ party: partyId })
        .populate("party")
        .sort({
          role: "asc",
        })
    : await Candidate.find()
        .populate("party")
        .sort({
          name: "asc",
        });
  res.send(candidates);
});

router.get("/candidates/:id", async (req, res) => {
  const candidate = await Candidate.findOne({ _id: req.params.id });
  res.send(candidate);
});

router.post("/candidates", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(422).send({ error: "You must provide a name" });
  }

  try {
    const candidate = new Candidate(req.body);
    await candidate.save();

    res.send(candidate);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.put("/candidates/:id", async (req, res) => {
  const candidate = await Candidate.findOne({ _id: req.params.id });
  Object.assign(candidate, req.body);
  await candidate.save();
  res.send("modified");
});

router.delete("/candidates/:id", async (req, res) => {
  await Candidate.deleteOne({ _id: req.params.id });
  res.send("success");
});

module.exports = router;
