const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const createTitle = (req, res) => {
  let sql = "INSERT INTO titles (emp_no, title, from_date, to_date) VALUES (?, ?, ?, ?)"
  sql = mysql.format(sql, [req.params.emp_no, req.body.title, req.body.from_date, req.body.to_date])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: rows.insertId });
  })
}

module.exports = {
  createTitle
}