const pool = require("../configs/db");
const statusCodes = require("../constants/statusCode");

// get scores by student id

const getScoresByID = async (req, res) => {
  const { sbd } = req.params;

  if (!sbd) {
    return res
      .status(statusCodes.BAD_REQUEST)
      .json({ error: "Student ID (sbd) is required!" });
  }

  try {
    // SQL query to get score by sbd
    const query = "SELECT * FROM diem_thi WHERE sbd = ?";
    // Execute the query
    const [results] = await pool.promise().query(query, [sbd]);

    if (results.length === 0) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ message: "Score not found for the given student number" });
    }
    // Send the result as JSON
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
