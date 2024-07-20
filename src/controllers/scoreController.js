const scoreModel = require("../models/scoreModel");
const statusCodes = require("../constants/statusCode");

// Controller to get scores by student ID
const getScoresByID = async (req, res) => {
  const { sbd } = req.params;

  if (!sbd) {
    return res
      .status(statusCodes.BAD_REQUEST)
      .json({ error: "Student ID (sbd) is required!" });
  }

  try {
    const results = await scoreModel.getScoreByID(sbd);

    if (results.length === 0) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "Score not found for the given student number" });
    }
    res.status(statusCodes.OK).json(results[0]);
  } catch (error) {
    console.error("Error fetching score:", error);
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "An error occurred while fetching the score" });
  }
};

module.exports = {
  getScoresByID,
};
