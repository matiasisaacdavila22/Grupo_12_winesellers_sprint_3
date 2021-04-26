const express = require('express');
const app = express();
const port= 3001
const path = require("path");
const publicPatch = path.resolve(__dirname, "./public");
const userRouter = require('./routes/userRouter');
app.use(express.static("./public"));
app.set('view engine', 'ejs');

app.use("/user", userRouter);

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "/views/home.html")) 
});

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/cart.html")) 
});

app.get("/productDetails", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/productDetails.html")) 
    });

app.use((req, res, next) =>{
    res.status(404).render('page_404');
});   

app.listen(port, () => {
    console.log('Listening on port'+port);
});