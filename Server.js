const express = require('express');
const app = express();


let product = [
    {id: 1, name: "loptop"},
    {id: 2  , name: "smart phone"}
]
app.get('/', (req, res) => {
  res.send('Hello My Server');
});

app.get('/name', (req, res) => {
    res.send('Panuwat Anu');
  });

app.get('/product/:id', (req,res) => {
    res.json("PID : " + product.find((item) => item.id == req.params.id).name)
})

//
app.get('/search', (req,res) => {
    let msg = req.query.msg
    res.send(msg)
})

app.use((req, res)=> {
    res.status(404).send("Page Not Found")
})

app.listen(3001, () => console.log('Server is running port 3001'));