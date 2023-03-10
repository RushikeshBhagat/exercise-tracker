const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.set('strictQuery', true);
mongoose.connect(uri,{ useNewUrlParser:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database running");
});

app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
})