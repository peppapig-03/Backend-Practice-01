import usersRepo from "../repositories/usersRepo.js"
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
        const data=await usersRepo.getUser(username)
        return data.length!=0
    }
    const validatePassword=function(password){
        return password!=""
    }
    const postUser=async function(username, password){
        await usersRepo.postUser(username,password)
    }
    const checkPassword=async function(username, password){
        const data=await usersRepo.getUser(username)
        if (data.length==0) return false
        if (data[0]["password"]!=password) return false
        return true
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