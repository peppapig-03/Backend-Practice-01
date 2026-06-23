import cookiesRepo from "../repositories/cookiesRepo.js"
const cookieService=(function(){
    const createSessionCookie=async function(userid){
        const currentTime=Math.floor(Date.now()/1000)
        const cookie=crypto.randomUUID()
        await cookiesRepo.postCookie(cookie,userid,currentTime+300)
        await cookiesRepo.expiredCookies(currentTime)
        return cookie
    }
    const verifySessionCookie=async function(cookie){
        const data=await cookiesRepo.getCookie(cookie)
        const currentTime=Math.floor(Date.now()/1000)
        if (data.length==0) return {ok:false,message:"Unauthorised",status:401}
        if (data[0]["expiry"]<currentTime){await cookiesRepo.deleteCookie(cookie);return {ok:false, message:"Timeout",status:408}}
        return {ok:true,data:data[0]["user_id"]}
    }
    return {
        createSessionCookie,
        verifySessionCookie
    }
})()
export default cookieService