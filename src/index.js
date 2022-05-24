import 'dotenv/config';

import { soma, dobro, temp, corPrimaria, ingressoCinema, media } from './services.js';
import express from 'express';
import cors from 'cors';
;

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT,
    () => console.log(`API online na porte ${process.env.PORT}`));


server.get('/ping', (req, resp) => {
    resp.send('pong');
});

server.get('/dobro/:numero', (req, resp) => {
    try {
        let a = Number(req.params.numero)
        const resposta = dobro(a);
        resp.send({
            dobro: resposta
        })
    }
    catch (err) {
        resp.status(404).send(err.message);
    }
});

server.get('/somar', (req, resp) => {

    try {
        let { a, b } = req.query;
        let x = soma(Number(a), Number(b));

        resp.send({
            soma: x
        })
    }
    catch (err) {
        resp.status(404).send(err.message);
    }
});

server.get('/temperatura', (req, resp) => {
    try {
        let { t } = req.query;
        let x = temp(Number(t));

        resp.send({
            temperatura: x
        })
    }
    catch (err) {
        resp.send(err.message)
    }
});

server.get('/dia2/corprimaria/:cor', (req, resp) => {
    try{
        let { a } = req.params.cor;
        let x = corPrimaria(a);

        resp.send({
            primaria: x
        })
    }
    catch(err){
        resp.send({
            ERROR: "Algo deu errado",
            type: err.message
        })
    }
});


server.post('/dia2/ingressosCinema', (req, resp) => {
    try{
        let { inteiras, meias, dia, nacionalidade} = req.body;
        let x = ingressoCinema(inteiras, meias, nacionalidade, dia);

        resp.send({
            Total_Compra: x
        });
    }
    catch(err) {
        resp.send({
            erro: "Algo deu errado",
            type: err.message
        });
    }
});

server.get('/media', (req, resp) => {
    try{
        let {num1, num2, num3} = req.query;
        let x = media(Number(num1), Number(num2), Number(num3));

        resp.send({
            Media: x
        })
    }
    catch(err){
        resp.send({
            erro: "Algo deu errado",
            type: err.message
        });
    }
});