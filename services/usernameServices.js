import userPool from "../repositories/usersRepository.js"
const service=(function(){
    const convertUser=function(string){
        while (string.includes(" ")){
            const space=string.search(" ")
            string=string.slice(0,space)+string.slice(space+1)
        }
        return string.toLowerCase()
    }
    const userExists=async function(username){
        if (username=="") return false
        const data=await userPool.query("SELECT * FROM users WHERE username=$1",[username])
        return data.rowCount!=0
    }
    const validatePassword=function(password){
        return password!=""
    }
    const postUser=async function(username, password){
        await userPool.query("INSERT INTO users (username, password) VALUES ($1,$2)", [username, password])
    }
    const checkPassword=async function(username, password){
        const data=await userPool.query("SELECT * FROM users WHERE username=$1 AND password=$2",[username, password])
        return data.rowCount!=0
    }
    return {
        convertUser,
        userExists,
        validatePassword,
        postUser,
        checkPassword
    }
})()
export default service