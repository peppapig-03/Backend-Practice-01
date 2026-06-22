import pool from "../../database/pool.js"
const service=(function(){
    const getAllProjects=async function(userid){
        const data=await pool.query('SELECT * FROM projects WHERE user_id=$1',[userid])
        return data.rows
    }
    const postNewProject=async function(userid,projectName){
        await pool.query('INSERT INTO projects(project_name,user_id) VALUES($1,$2)',[projectName,userid])
    }
    return {
        getAllProjects,
        postNewProject
    }
})()
export default service