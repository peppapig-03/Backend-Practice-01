import pool from "../../database/pool.js"
const repo=(function(){
    const getUser=async function(username){
        const data=await pool.query("SELECT * FROM users WHERE username=$1",[username])
        return data.rows
    }
    const postUser=async function(username, password){
        await pool.query("INSERT INTO users(username, password) VALUES($1,$2)",[username, password])
    }
    return {
        getUser,
        postUser
    }
})()
export default repo