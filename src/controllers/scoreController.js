const scoreModel = require("../models/scoreModel");
const statusCodes = require("../constants/statusCode");

// Controller to get scores by student ID
const getScoresByID = async (req, res) => {
  const { sbd } = req.params; 

  if (!sbd) {
    return res
      .status(statusCodes.BAD_REQUEST)
      .json({ error: "Vui lòng nhập SBD!" });
  }

  try {
    const results = await scoreModel.getScoreByID(sbd);

    if (results.length === 0) {
      return res
        .status(statusCodes.NOT_FOUND)
        .json({ error: "Không tìm thấy kết quả" });
    }
    
    res.status(statusCodes.OK).json({ score: results[0] });
  } catch (error) {
    console.error("Error fetching score:", error);
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Có lỗi xảy ra!" });
  }
};

module.exports = {
  getScoresByID,
};
