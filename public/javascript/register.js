const body=document.body
body.style.backgroundColor="yellow"
const form=document.querySelector("form")
form.addEventListener("submit", async (event)=>{
    event.preventDefault()
    const data=new FormData(form)
    const synthesis={}
    for (const key of data.entries()) synthesis[key[0]]=key[1]
    const response=await fetch("http://localhost:3000/register/",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ username: synthesis["register_username"], password: synthesis["register_password"]})
    })
    const resp=await response.json()
    if (resp.redirect) {
        form.reset()
        window.location.href=resp.redirect
        alert("Account Creation Success!")
    } else{
        alert(resp.message)
    }
})