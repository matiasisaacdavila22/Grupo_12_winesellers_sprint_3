const express = require('express');
const app = express();
const port= process.env.PORT;
const path = require("path");
const publicPatch = path.resolve(__dirname, "./public");
const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');
app.use(express.static("./Public"));
app.set('view engine', 'ejs');

app.use("/user", userRouter);
app.use('/cart', cartRouter);

app.get("/", (req, res) => { 
    res.render('home') 
});

app.get("/productDetails", (req, res) => {
    res.render('productDetails') 
});

app.use((req, res, next) =>{
    res.status(404).render('page_404');
});   

app.listen(port || 3001, () => {
    console.log('Listening on port'+port);
});