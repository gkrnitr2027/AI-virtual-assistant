import express from "express"
import { getCurrentUser } from "../controllers/user.controllers.js"
import isAuth from "../middleware/isAuth.js"
import authRouter from "./auth.routes.js"

const userRouter=express.Router()

authRouter.get("/current",isAuth,getCurrentUser)

export default userRouter