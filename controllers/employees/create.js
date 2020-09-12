const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')


const createEmployee = (req, res) => {
  let sql = "INSERT INTO employees (birth_date, first_name, last_name, gender, hire_date) VALUES (?, ?, ?, ?, ?)"
  sql = mysql.format(sql, [req.body.birth_date, req.body.first_name, req.body.last_name, req.body.gender, req.body.hire_date])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: rows.insertId });
  })
}

module.exports = {
     createEmployee
}