const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const deleteEmployee = (req, res) => {
  let sql = "UPDATE employees SET is_deleted = true WHERE emp_no = ?"
  sql = mysql.format(sql, [req.params.emp_no])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

 module.exports = {
    deleteEmployee
 }