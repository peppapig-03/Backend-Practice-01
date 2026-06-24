const projectBoxDeletion=async function(projectID){
    const response=await fetch(`http://localhost:3000/dashboard/delete/project/${projectID}`,{method:"DELETE"})
    const data=await response.json()
    if (data.redirect) window.location.href='http://localhost:3000/dashboard'
}
const todoAddition=async function(projectID,todo_name){
    const response=await fetch(`http://localhost:3000/dashboard/new/todoitem/${projectID}`,{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({todo:todo_name})
    })
    const data=await response.json()
    if (data.redirect) window.location.href='http://localhost:3000/dashboard'
}
const spawnForm=async function(){

}
const projects=document.querySelectorAll(".projectBox")
const d=document.querySelector("dialog")
for (const project of projects){
    const deleteButton=project.querySelector(".deleteProjectButton")
    deleteButton.addEventListener("click",async (event)=>(await projectBoxDeletion(project.dataset.projectId)))
    const todoButton=project.querySelector(".newTodoButton")
    todoButton.addEventListener("click",async (event)=>{d.showModal()})
}
