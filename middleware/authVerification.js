import cookiesService from "../auth/services/cookieService.js"
const authVer=(function(){
    const validSession=async function(req,res,next){
        const cookie=req.cookies
        const session=cookie["session"]
        if (!session) return res.status(401).json({ok:false,message:"Unauthorised",status:401})
        try{
            const response=await cookiesService.verifySessionCookie(session)
            if (!response.ok) {
                return res.status(response.status).json(response)
            }
            req.userID=response.data
            next()
        } catch(error){
            return res.status(500).json({ok:false,message:"Internal Server Error",status:500})
        }
    }
    const authProject=async function(req,res,next){
        const cookie=req.cookies
        const session=cookie["session"]
        if (!session) return res.json({redirect:"xxx"})
        console.log(cookie,session)
        try{
            const response=await cookiesService.verifyProject(session,req.params.projectid)
            console.log(response)
            if (!response.ok) return res.status(response.status).json(response)
            next()
        } catch(error){
            return res.status(500).json({ok:false,message:"Internal Server Auth Error",status:500})
        }
    }
    return {
        validSession,
        authProject
    }
})()
export default authVer