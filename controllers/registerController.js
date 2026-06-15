import pool from "../repositories/usersRepository.js"
import userServices from "../services/usernameServices.js"
const registerController=(function(){
    const renderRegister=function(req,res){
        res.render("loginRegister", {
            stylesheet:"css/loginRegister.css", 
            staticJS:"javascript/register.js", 
            title:"Register",
            h1Title: "Register Page",
            formID:"registerForm",
            ID:"register_username",
            input1_label:"Username: ",
            input1_placeholder:"username...",
            PW:"register_password",
            input2_label:"Password: ",
            input2_placeholder:"password...",
            submit:"Submit",
            redirect:"login",
            nextPage:"Login Account"
        })  
    }
    const postNewAcc=async function(req,res){
        const newString=userServices.convertUser(req.body.username)
        try{
            if (await userServices.userExists(newString)==true) return res.status(400).json({status:400, message:newString==""?"Invalid Username":"Username is Already in Use"})
            else if (userServices.validatePassword(req.body.password)==false) return res.status(400).json({status:400, message:"Invalid Password"})
            else {
                await userServices.postUser(newString, req.body.password)
                return res.status(302).json({redirect:"/login"})
            }
        } catch(error){
            return res.status(500).json({status:500, message:"Internal Server Error"})
        }
    }
    return {renderRegister,
        postNewAcc
    }
})()
export default registerController