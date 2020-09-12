const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const updateTitle = (req, res) => {
  let sql = "UPDATE titles SET title = ? WHERE emp_no = ? AND from_date = ?	 AND to_date = ?"
  sql = mysql.format(sql, [req.body.title, req.params.emp_no, req.body.from_date, req.body.to_date])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = {
  updateTitle
}