import pool from "../../database/pool.js"
const repo=(function(){
    const postCookie=async function(cookiestr, userid, expiry){
        await pool.query("INSERT INTO cookies(cookie, user_id, expiry) values ($1,$2,$3)",[cookiestr,userid,expiry])
    }
    const getCookie=async function(cookiestr){
        const data=await pool.query("SELECT * FROM cookies WHERE cookie=$1",[cookiestr])
        return data.rows
    }
    const deleteCookie=async function(cookiestr){
        await pool.query("DELETE FROM cookies WHERE cookie=$1",[cookiestr])
    }
    const expiredCookies=async function(time){
        await pool.query("DELETE FROM cookies WHERE expiry<$1",[time])
    }
    const getCookieProject=async function(cookie, projectid){
        console.log(cookie,projectid)
        const data=await pool.query(`SELECT * FROM cookies as c
            INNER JOIN projects as p
            ON c.user_id=p.user_id
            WHERE p.project_id=$1 AND c.cookie=$2`,[projectid,cookie]
        )
        console.log(data.rows)
        return data.rows
    }
    return {
        postCookie,
        getCookie,
        deleteCookie,
        expiredCookies,
        getCookieProject
    }
})()
export default repo