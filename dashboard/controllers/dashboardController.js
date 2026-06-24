import dashboardService from "../services/dashboardServices.js"

const dashboardController=(function(){
    const renderDashboard=async function(req,res){
        const data=await dashboardService.organisedProjects(req.userID)
        res.render("dashboard", {
            stylesheet:"css/dashboardMainPage.css",
            staticJS:"javascript/dashboardMainPage.js",
            title:"Dashboard",
            projects:data
        })
        return
    }
    const deleteProject=async function(req,res){
        try{
            await dashboardService.deleteProject(req.params.projectid)
            res.json({ok:true, redirect:"dashboard"})
        } catch(error){
            res.status(500).json({ok:false,status:500,message:"Internal Server Error"})
        }
    }
    const postTodo=async function(req,res){
        try{
            await dashboardService.postTodo(req.params.projectid,req.body.todo)
            res.json({ok:true, rediret:"dashboard"})
        } catch(error){
            res.status(500).json({ok:false,status:500,message:"Internal Server Error"})
        }
    }
    return {
        renderDashboard,
        deleteProject,
        postTodo
    }
})()
export default dashboardController