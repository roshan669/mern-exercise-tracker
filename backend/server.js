const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');


require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dhamiroshan730:roshan2003@cluster0.jvjksh9.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo database connection established successfully");
});

const exerciseRouter=require('./routes/exercises');
const usersRouter=require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',usersRouter);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});