import userPool from "../repositories/usersRepository.js"
const service=(function(){
    const convertUser=function(string){
        while (string.includes(" ")){
            const space=string.search(" ")
            string=string.slice(0,space)+string.slice(space+1)
        }
        return string.toLowerCase()
    }
    const validateUser=async function(username){
        if (username=="") return false
        const data=await userPool.query("SELECT * FROM users WHERE username=$1",[username])
        return data.rows==0
    }
    const validatePassword=function(password){
        return password!=""
    }
    const postUser=async function(username, password){
        await userPool.query("INSERT INTO users (username, password) VALUES ($1,$2)", [username, password])
    }
    return {
        convertUser,
        validateUser,
        validatePassword,
        postUser
    }
})()
export default service