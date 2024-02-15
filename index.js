const express = require("express");
const app = express();
const PORT = 8002;
const router = require("./routes/url");
const mongoose = require('mongoose');

// const {MongoClient} = require("mongodb");

app.use(express.urlencoded({extended:true}));

// Replace the uri string with your connection string.
const uri = "mongodb+srv://nirajkumar2001:4L6Nq%235g.sP4Ed%24@cluster0.wfvoks2.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

// async function connectDB() {
//     try {
//         await client.connect();
//         console.log('DB connected');
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//     }
// }

// connectDB();



// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Error connecting to MongoDB Atlas:', error));



const controller = require("./controllers/url");    
app.get('/:urlId', controller.openShortURL);
app.use('/url', router);


app.listen(PORT,()=>{
    console.log('Server is running on PORT:', PORT);
});