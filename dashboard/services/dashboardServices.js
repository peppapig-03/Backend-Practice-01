import projectRepo from "../repositories/projectRepo.js"
import todoRepo from "../repositories/todoRepo.js"
import usersRepo from "../../auth/repositories/usersRepo.js"
const service=(function(){
    const organisedProjects=async function(userid){
        const username=await usersRepo.getUsername(userid)
        const projectData=await todoRepo.getAllTodosForUser(userid)
        const returnHash={}
        projectData.forEach((todoitem)=>{
            const pid=todoitem["project_id"], pname=todoitem["project_name"], tname=todoitem["todo_name"]
            if (returnHash[pid]==null) {
                returnHash[pid]={}
                returnHash[pid]["project_name"]=pname
                returnHash[pid]["todoitems"]=[]
            }
            if (tname!=null) returnHash[pid]["todoitems"].push(tname)
        })
        return returnHash
    }
    return {
        organisedProjects
    }
})()
export default service