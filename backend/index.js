const express=require('express');
var cors=require('cors');
const connectToMongo=require('./db');
connectToMongo();
const app=express();
const port=1818;
app.use(express.json())
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth.js'));
app.use('/api/transaction',require('./routes/transaction.js'));

app.get('/',async (req,res)=>{
    res.send('Marcos');
})


app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})