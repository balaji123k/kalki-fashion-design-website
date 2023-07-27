const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/WTdemo').then(()=>{
    console.log("data");
}).catch((err)=>{
    console.log(err);
})
app.use(cors());

const loginmodel=mongoose.Schema({
    username:{type:String},
    password:{type:String}
})

const loginschema=mongoose.model('login',loginmodel,'login')

app.post('/login/:email/:password',async(req,res)=>{
    try{
        const username=req.params.email
        const password=req.params.password
        const data=await loginschema.findOne({username:username})
        // if(data.password===password)
        // {
        //     console.log("crt")
        //     res.send({status:200,data:"crt"})
        // }
        // if(data.password!==password)
        // {
        //     console.log("wrong password")
        //     res.send({status:200,data:"wp"})
        // }
        // else
        // {
        //     console.log("wrong user")
        //     res.send({status:200,data:"wu"})
        // }

        if(!data)
        {
            res.json("wu")
            // res.send({data:"wu"})
            console.log("wrong Admin")
        }

        else if(data.password!==password)
        {
            res.json("wp")
            // res.send({data:"wp"})
            console.log("wrongpassword")
        }
        else
        {
            res.json("crt")
            console.log("correct Admin")
        }

    }
    catch(e)
    {
        console.log(e)
    }
})

const schema= mongoose.Schema({
    name:{
        type:String
    },email:{
        type:String
    },
    phone:{
        type:Number
    },
    handlength:{
        type:Number
    },
    handwidth:{
        type:Number
    },
    bodylength:{
        type:Number
    },
    bodywidth:{
        type:Number
    },
    shoulderlength:{
        type:Number
    },
    neckwidth:{
        type:Number
    },
    createdAt: {
        type: Date
    },
})
const Schemas=mongoose.model('Schemas',schema)

app.use(express.json())

app.post("/",async(req,res)=>{
    console.log(req.body)
    try{
        console.log("entered")
        const newdata= await Schemas.create(req.body);
        res.status(200).send(newdata);
    }
    catch(err){
        res.end(err)
    }
})

app.get('/fetch1',async(req,res)=>{
    try{
        const data=await Schemas.find({})
        res.send({status:200,data:data})
    }
    catch(e)
    {
        console.log(e)
    }
})

// app.get('/',async(req,res)=>{
//     try{
//         console.log("entered");
//         const newdata= await Schemas.find();
//         res.status(200).send(newdata);
//     }
//     catch(err){
//         res.end(err)
//     }
// })

app.listen(3000,()=>{
    console.log("port running")
})
