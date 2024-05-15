import pool from "../../db/db.js"

export const createTask = async (req, res) => {
    const { title, description, done } = req.body
    const result = await pool.query("INSERT INTO tasks(title, description, done) VALUES(?, ?, ?)", [title, description, done])
    res.json(result)
}

export const updateTask = async (req, res) => {
    const { title, description, done } = req.body
    const id = req.params.id
    const result = await pool.query("UPDATE tasks SET title=? ,description=? , done=? WHERE id=?", [title, description, done, id])
    res.json(result)
}

export const getTasks = async (req, res) => {
    const tasks = await pool.query("SELECT * FROM tasks")
    res.json(tasks[0])
}

export const getOneTask = async (req, res) => {
    const id = req.params.id
    const oneTask = await pool.query("SELECT * FROM tasks WHERE id=?", id)
    res.json(oneTask[0])
}

export const deleteTask = async (req, res) => {
    const id = req.params.id
    const deleted = await pool.query("DELETE FROM tasks WHERE id=?", id)
    res.json(deleteTask)
}

