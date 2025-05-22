const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');


/*==========Already Defined-MiddleWares==========*/
app.use('/',(req,res,next)=>{
    console.log(req.method);
    next();
});


app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));



/*==========Basic Routes==========*/

app.get('/',(req,res)=>{
    res.send('hello');
});

app.use('/',(req,res)=>{
    res.status(404).send('Page Not Found');
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is Listening at PORT:${process.env.PORT}`);
});