const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const dotenv = require('dotenv');

//Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT;

// Set up view engine
app.engine('hbs',hbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'public/views'));

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.get('/', (req, res) => {
    //
})

// Start server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});