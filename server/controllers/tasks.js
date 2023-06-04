const pool = require('../database/db')

const addTask = async (req, res) => {
  try {
    const { description } = req.body
    const newtodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    )
    res.json(newtodo)
  } catch (err) {
    console.log(err)
  }
}
const getAllTasks = async (req, res) => {
  try {
    const tasks = await pool.query('SELECT * FROM todo ')
    res.json(tasks.rows)
  } catch (err) {
    console.log(tasks)
  }
}
const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const task = await pool.query(
      'SELECT * FROM todo WHERE todo_id=$1 description = $2 ',
      [id, description]
    )
    res.json(task.rows)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { addTask, getAllTasks, getTask }
