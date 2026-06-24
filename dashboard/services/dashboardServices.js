import projectRepo from "../repositories/projectRepo.js"
import todoRepo from "../repositories/todoRepo.js"
import usersRepo from "../../auth/repositories/usersRepo.js"
const service=(function(){
    const organisedProjects=async function(userid){
        const username=await usersRepo.getUsername(userid)
        const projectData=await todoRepo.getAllTodosForUser(userid)
        const returnHash={}
        projectData.forEach((todoitem)=>{
            const pid=todoitem["project_id"], pname=todoitem["project_name"], tname=todoitem["todo_name"], tid=todoitem["todo_id"]
            if (returnHash[pid]==null) {
                returnHash[pid]={}
                returnHash[pid]["project_id"]=pid
                returnHash[pid]["project_name"]=pname
                returnHash[pid]["todoitems"]=[]
            }
            if (tname!=null) returnHash[pid]["todoitems"].push({todo_name:tname,todo_id:tid})
        })
        return Object.values(returnHash)
    }
    const deleteProject=async function(projectid){
        await projectRepo.deleteProject(projectid)
    }
    const postTodo=async function(projectid, todoname){
        await todoRepo.postTodo(projectid, todoname)
    }
    return {
        organisedProjects,
        deleteProject,
        postTodo
    }
})()
export default service