
const express = require("express");
const router = express.Router();

const { getEvaluations, newEvaluation, getEvaluation, deleteEvaluation} = require("../controllers/evaluationController");

router.get("/evaluations", getEvaluations);
router.get("/evaluation/:id", getEvaluation);
router.post("/newEvaluation", newEvaluation);
router.delete("/delete/:id", deleteEvaluation);



module.exports = router;

