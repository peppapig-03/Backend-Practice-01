const parsing=(function(){
    const cookieParser=function(req,res,next){
        const cookiestring=req.headers.cookie
        const ret={}
        if (cookiestring==undefined) {req.cookies={};next();return}
        const cookieArray=cookiestring.split("; ")
        cookieArray.forEach((cookie)=>{
            const eq=cookie.indexOf("=")
            ret[cookie.slice(0,eq)]=cookie.slice(eq+1)
        })
        req.cookies=ret
        next()
    }
    return {
        cookieParser
    }
})()
export default parsing