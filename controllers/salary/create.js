const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')


const createSalary = (req, res) => {
  let sql = "INSERT INTO salaries (emp_no, salary, from_date, to_date)VALUES(?, ?, ?, ?);"
  sql = mysql.format(sql, [req.params.emp_no, req.body.salary, req.body.from_date, req.body.to_date])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: rows.insertId });
  })
}

module.exports = {
     createSalary
}