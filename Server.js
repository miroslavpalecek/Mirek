const express = require ('express')
const app = express ()

app.use (express.json())

//const customersRouter = require ('./routes/customers')
//app.use('/customers' , customersRouter)

app.get('/users', (req,res)=>{
    console.log('get users details');
    res.json({message:'Ahoj negri'});
})

app.listen(3000, () => console.log ('Server Started'))