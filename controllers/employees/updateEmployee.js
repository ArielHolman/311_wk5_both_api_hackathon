const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

const updateEmployee = (req, res) => {
  let sql = "UPDATE employees SET birth_date = ?, first_name = ?, last_name = ?, gender = ?, hire_date = ?  WHERE employees.?;"
  sql = mysql.format(sql, [req.body.birth_date, req.body.first_name, req.body.last_name, req.body.gender, req.body.hire_date, req.params])
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

 module.exports = {
    updateEmployee
 }