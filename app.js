const express = require('express');
c
app.get("/productDetails", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/productDetails.html")) 
    });

app.use((req, res, next) =>{
    res.status(404).render('page_404');
});   

app.listen(port, () => {
    console.log('Listening on port'+port);
});