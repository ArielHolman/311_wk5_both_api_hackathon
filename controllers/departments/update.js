const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const updateDepartment = (req, res) => {
  let sql = "UPDATE departments SET dept_name = ? WHERE dept_no = ?"
  sql = mysql.format(sql, [req.body.dept_name, req.params.dept_no])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = {
  updateDepartment
}