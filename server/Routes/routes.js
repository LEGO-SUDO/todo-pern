const express = require('express')
const { addTask, getAllTasks, getTask } = require('../controllers/tasks')

const router = express.Router()

// GET ALL
router.get('/tasks', getAllTasks)

// GET
router.get('/task/:id', getTask)

// POST
router.post('/createtask', addTask)

// DELETE
// router.delete('/delete/:id', deleteTask)

// UPDATE
// router.put('/update/:id', updateTask)

module.exports = router
