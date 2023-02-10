import express from 'express';

const app = express();
const PORT = 7001;

app.listen(PORT, () =>{
    console.log(`App is running successfully on PORT ${PORT}`)
})