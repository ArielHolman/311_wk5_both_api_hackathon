const mysql = require('mysql')
const pool = require("../../sql/connection")
const { handleSQLError } = require('../../sql/error')

const getDepartmentsByNo = (req, res) => {
  let sql = "SELECT * FROM departments WHERE dept_no=?"
  sql = mysql.format(sql, [req.params.dept_no])

  pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
  })
}

module.exports = {
  getDepartmentsByNo
}

