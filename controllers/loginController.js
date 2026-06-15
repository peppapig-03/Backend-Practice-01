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
    return {
        renderLogin
    }
})()
export default loginController