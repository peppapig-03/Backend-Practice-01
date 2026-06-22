import pool from "../../database/pool.js"
const cookieService=(function(){
    const createSessionCookie=async function(userid){
        const currentTime=Math.floor(Date.now()/1000)
        const cookie=crypto.randomUUID()
        await pool.query("INSERT INTO cookies(cookie,user_id,expiry) values ($1,$2,$3)",[cookie,userid,currentTime+60])
        return cookie
    }
    const verifySessionCookie=async function(cookie){
        const data=await pool.query("SELECT * FROM cookies WHERE cookie=$1",[cookie])
        if (data.rowCount==0) throw new Error("Cookie Not Found")
        
    }
})()