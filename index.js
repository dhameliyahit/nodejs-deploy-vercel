import express from 'express';

const APP_PORT = 8080;
const app = express();

app.get("/",(req,res)=>{
    res.end("<h1>Node+Express deploy On Vercel</h1>")
});

app.use("/api",mainRoute);

app.listen(APP_PORT,()=>{
    console.log(`Server is Runnng on PORT no. ${APP_PORT}`);
})