const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        company: {
            type: String,
        },
        desc: {
            type: String,
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("Job", JobSchema);