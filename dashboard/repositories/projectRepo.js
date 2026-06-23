import pool from "../../database/pool.js"
const projectRepo=(function(){
    const getAllProjects=async function(userid){
        const data=await pool.query("SELECT * FROM projects WHERE user_id=$1",[userid])
        return data.rows
    }
    const postProject=async function(userid,projectname){
        await pool.query('INSERT INTO projects(project_name,user_id) VALUES($1,$2)',[projectname,userid])
    }
    return {
        getAllProjects,
        postProject
    }
})()
export default projectRepo