import express from "express"
import cont from "../controllers/registerController.js"
const router=express.Router()

router.get("/", (req,res)=>cont.renderRegister(req,res))
router.post("/", async (req,res)=> await cont.postNewAcc(req,res))
export default router