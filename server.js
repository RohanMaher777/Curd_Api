const express = require('express');
const userRoute = require('./src/routes/user.route');
// const cors = require('cors');
require('./src/db/connection');
const PORT = 5050;
const app = express();

//app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 app.use('/', userRoute);
// app.get('/', (req, res)=>{
//     res.send("hello")
// })


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})