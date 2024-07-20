const pool = require("../configs/db");

// Function to get scores by student ID
const getScoreByID = async (sbd) => {
  const query = `
  SELECT
  *,
  CASE
    WHEN (vat_li > 0 OR hoa_hoc > 0 OR sinh_hoc > 0) AND (lich_su = 0 AND dia_li = 0 AND gdcd = 0) THEN 'tu_nhien'
    WHEN (lich_su > 0 OR dia_li > 0 OR gdcd > 0) AND (vat_li = 0 AND hoa_hoc = 0 AND sinh_hoc = 0) THEN 'xa_hoi'
    ELSE 'Unknown'
  END AS group_type
FROM diem_thi
WHERE sbd = ?;

  `;
  const [results] = await pool.promise().query(query, [sbd]);
  return results;
};

module.exports = {
  getScoreByID,
};
