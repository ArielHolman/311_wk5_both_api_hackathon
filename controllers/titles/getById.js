const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const getTitlesByNo = (req, res) => {
  let sql = "SELECT * FROM titles WHERE emp_no = ?"
  sql = mysql.format(sql, [req.params.emp_no])

  pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
  })
}

module.exports = {
  getTitlesByNo
}