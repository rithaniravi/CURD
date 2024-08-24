const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const connectDatabase=require('./db')
// const mongoose=require("mongoose")
const UserModel=require('./schema')
const app=express()
app.use(cors({
    origin:["https://curdfrontend-4kqo.onrender.com"],
    credentials:true
  }))
app.use(express.json())

dotenv.config();
connectDatabase();

app.get('/',(req,res)=>{
    UserModel.find({})
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post("/create",(req,res)=>{
    UserModel.create(req.body)
    .then((user)=>res.json(user))
    .catch((err)=>console.log(err)
        );
    })


app.delete("/deleteUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})


app.listen(3001,()=>{
    console.log("server started")
})