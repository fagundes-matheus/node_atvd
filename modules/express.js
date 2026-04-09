const express = require("express")

const app = express()

app.get('/home',(req, res)=>{
    res.contentType('application/html');
    res.status(200).send("<h1>hello world</h1>")
});

app.get('/users',(req ,res) => {
    
    const user = [
        {
            name: "Matheus",
            email: "teste@gmail.com",
        },
        {
            name: "sssss",
            email: "olhala.com"
        }
    ]

    res.status(200).json(user);
})


const port = 8080;

app.listen(port, ()=> console.log(`Rodando com Express na porta ${port}!`));





