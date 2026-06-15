const body=document.body
body.style.backgroundColor="yellow"
const form=document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const data=new FormData(form)
    for (const key of data.entries()) console.log(key)
    form.reset()
})