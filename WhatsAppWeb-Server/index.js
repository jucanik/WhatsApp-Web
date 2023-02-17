import express from 'express';
import Connection from './database/db.js';
import Route from './route/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Route);

const PORT = 7001;
Connection();
app.listen(PORT, () =>{
    console.log(`App is running successfully on PORT ${PORT}`);
})