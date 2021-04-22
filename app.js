const express = require('express');
const app = express();
const port= 3001
const path = require("path");
const publicPatch = path.resolve(__dirname, "./public");
app.use(express.static("./public"));

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "/views/home.html")) 
});

app.get("/register", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/register.html")) 
    });

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/cart.html")) 
});

app.get("/login", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/login.html")) 
    });

app.get("/productDetails", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/productDetails.html")) 
    });

app.listen(port, () => {
    console.log('Listening on port'+port);
});