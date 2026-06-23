import userService from "../services/usernameServices.js"
import cookieService from "../services/cookieService.js"
import pool from "../../database/pool.js"
const loginController=(function(){
    const renderLogin=async function(req,res){
        res.render("loginRegister", {
            stylesheet:"css/loginRegister.css", 
            staticJS:"javascript/login.js", 
            title:"Login",
            h1Title: "Login Page",
            formID:"loginForm",
            ID:"login_username",
            input1_label:"Username: ",
            input1_placeholder:"username...",
            PW:"login_password",
            input2_label:"Password: ",
            input2_placeholder:"password...",
            submit:"Submit",
            redirect:"register",
            nextPage:"Register New Account"
        })
    }
    const postLogin=async function(req,res){
        const newString=userService.convertUser(req.body.username)
        const password=req.body.password
        if (newString=="") return res.status(400).json({status:400, message:"Invalid Username"})
        try{
            const pwCheck=await userService.checkPassword(newString,password)
            if (pwCheck["ok"]==false) return res.status(400).json({status:400, message:"Wrong Login Credential(s)"})
            const cookie=await cookieService.createSessionCookie(pwCheck["id"])
            res.cookie("session",cookie,{
                maxAge:300000,
                httpOnly:true,
                secure:true,
                sameSite:'lax'
            })
            return res.status(302).json({redirect:"/dashboard"})
        } catch(error){
            return res.status(500).json({status:500, message:"Internal Server Error"})
        }
    }
    return {
        renderLogin,
        postLogin
    }
})()
export default loginController