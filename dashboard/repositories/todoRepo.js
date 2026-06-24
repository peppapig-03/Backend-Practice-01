import pool from "../../database/pool.js"
const todoRepo=(function(){
    const getAllTodos=async function(projectid){
        const data=await pool.query("SELECT * FROM todoitems WHERE project_id=$1",[projectid])
        return data.rows
    }
    const getAllTodosForUser=async function(userid){
        const data=await pool.query(`SELECT p.project_id, p.project_name,t.todo_name,t.todo_id FROM projects as p
            LEFT JOIN todoitems as t
            ON p.project_id=t.project_id
            WHERE p.user_id=$1`,[userid])
        return data.rows
    }
    const postTodo=async function(projectid,todoname){
        await pool.query('INSERT INTO todoitems(todo_name,project_id) VALUES($1,$2)',[todoname,projectid])
    }
    return {
        getAllTodosForUser,
        getAllTodos,
        postTodo
    }
})()
export default todoRepo