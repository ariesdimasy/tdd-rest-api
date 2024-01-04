import express, { Router, Request, Response } from "express"

const router: Router = express.Router()

router.get("/", function (req: Request, res: Response) {
    return res.status(200).send({
        message: "OK",
        users: ["User 1", "User 2", "User 3"]
    })
})

export default router