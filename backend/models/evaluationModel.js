const mongoose = require("mongoose");
const schema = mongoose.Schema;

const evaluationSchema = new schema({
    visitDateTime: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    evaluator: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: true,
    },
    cashier: {
        type: String,
        required: true,
    },
    greeting: {
        type: Boolean,
        required: true,
    },
    repeatOrder: {
        type: Boolean,
        required: true,
    },
    upsell: {
        type: Boolean,
        required: true,
    },
    patio: {
        type: Boolean,
        required: true,
    },
    wait: {
        type: Number,
        required: true,
    },
    foodScore: {
        type: Number,
        required: true,
    },
    cleanScore: {
        type: Number,
        required: true,
    },
    serviceScore: {
        type: Number,
        required: true,
    },
    calculateScore: {
        type: Number,
        required: false,
    },
    image: {
        type: String,
        required: true,
    },
    identifyManager: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },

}, {timestamps: true});

const evaluationModel = mongoose.model("Evaluation", evaluationSchema);
module.exports = evaluationModel;