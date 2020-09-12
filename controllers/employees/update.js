const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const updateEmployee = (req, res) => {
  let sql = "UPDATE employees SET birth_date = ?, first_name = ?, last_name = ?, gender = ?, hire_date = ?  WHERE emp_no = ?;"
  sql = mysql.format(sql, [req.body.birth_date, req.body.first_name, req.body.last_name, req.body.gender, req.body.hire_date, req.params.emp_no])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

 module.exports = {
    updateEmployee
 }