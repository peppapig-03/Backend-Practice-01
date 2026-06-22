import express from "express"
import cont from "../controllers/loginController.js"
const router=express.Router()

router.get("/", (req,res)=>cont.renderLogin(req,res))
router.post("/", (req,res)=>cont.postLogin(req,res))
export default router