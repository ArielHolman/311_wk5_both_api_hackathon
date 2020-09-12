const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const deleteTitle = (req, res) => {
  let sql = "DELETE FROM titles WHERE emp_no = ? AND title = ?"
  sql = mysql.format(sql, [req.params.emp_no, req.body.title])

  pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
  })
}

module.exports = {
  deleteTitle
}