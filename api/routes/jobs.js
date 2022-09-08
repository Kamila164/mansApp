const router = require("express").Router();
const Job = require("../models/Job");

//create a job
router.post("/", async (req,res) => {
    const newJob = new Job(req.body);
    try {
        const savedJob = await newJob.save();
        res.status(200).json(savedPJob);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
