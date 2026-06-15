import express from "express"
const router=express.Router()

router.get("/", (req,res)=>{
    res.render("loginRegister", 
        {stylesheet:"css/loginRegister.css", 
        staticJS:"javascript/login.js", 
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
})

export default router