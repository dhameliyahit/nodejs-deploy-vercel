import express from 'express';

const router = express.Router();

router.get("/main",(req,res)=>{
    res.end("<h1>main route</h1>")
})

export default router