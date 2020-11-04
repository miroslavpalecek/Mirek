const express = require ('express')
const app = express ()


//app.get('/', (req, res) => {
 // res.send('Hello World!')

const get = require('./get')
const post = require('./post')
const put = require('./put')
const deleteN = require('./deleteN')

app.use (express.json())

app.get('/users', get);

app.post('/users', post)

app.put('/users', put)

app.delete('/users', deleteN)


app.listen(3000, () => console.log ('Server Started'))