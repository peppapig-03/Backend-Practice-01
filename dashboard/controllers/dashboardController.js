import dashboardService from "../services/dashboardServices.js"

const dashboardController=(function(){
    const renderDashboard=async function(req,res){
        const data=await dashboardService.organisedProjects(req.userID)
        res.json(data)
    }
    return {
        renderDashboard
    }
})()
export default dashboardController