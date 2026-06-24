const form=document.querySelector("form")
form.addEventListener("submit", async (event)=>{
    event.preventDefault()
    const data=new FormData(form)
    const synthesis={}
    for (const [key, value] of data.entries()) synthesis[key]=value
    const response=await fetch("http://localhost:3000/login/",{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ username: synthesis["login_username"], password: synthesis["login_password"]})
    })
    const synth=await response.json()
    if (synth.redirect){window.location.href="http://localhost:3000/dashboard"}
    else {alert(synth.message)}
    
})