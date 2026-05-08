const express = require('express');
const app = express();
const porta = 8080;

// IMPORTANTE: Esse é o "tradutor" que permite ao Node ler os dados do formulário HTML!
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota POST que implementa o método salvarContato() do Diagrama UML
<form action="http://localhost:8080/salvar-contato" method="POST">
{
    const nome = req.body.nome

    const preco=req.body.preco

    const quantidade=req.body.quantidade

    const cupom=req.body.cupom


    if(!nome||!preco) {

     return res.status (400).send("erro:nome e preco são obrigatorios!")
    }

    console.log('dados recebidos :nome : $ {nome}, preco: $${preco}, qtd: ${quantidade}, cupom: ${cupom}');
    const contatosalvo = {nome,preco,quantidade,cupom};

    console.log("salvando no sistema . . .", contatosalvo);

    res.send(`
        <h1>Dados recebidos com sucesso!</h1>
        <p>Produto: ${nome}</p>
        <p>Total registrado para o cupom: ${cupom}</p>
        <a href="/">Voltar ao formulário</a>
    `);
   
    // Agora usamos req.body porque os dados vêm escondidos do formulário HTML!

});

app.listen(porta, () => {
    console.log(`Servidor rodando! Aguardando o formulário HTML na porta ${porta}...`);
});
