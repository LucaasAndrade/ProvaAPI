import { Router } from "express";
import {
    soma, dobro, temp, corPrimaria, ingressoCinema, media, maiorNumero,
    frequenciaCaracter, tabuada
   } from './services.js';

const server = Router();


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

server.post('/media', (req, resp) => {
    try{
        let {num1, num2, num3} = req.body;
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
        let x = corPrimaria(req.params.cor);

        resp.send({
            a: req.params.cor,
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
        let { inteiras, meias, nacionalidade, dia} = req.body;
        let x = ingressoCinema(Number(inteiras), Number(meias), nacionalidade, dia);

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

server.post('/dia2/maiorNumero', (req, resp) => {
    try{
        let a = req.body;
        let x = maiorNumero(a);

        resp.send({
            maior: x
        });
    }
    catch(err) {
        resp.send({
            erro: "Algo deu errado",
            type: err.message
        });
    }
});

server.get('/dia2/freqCaracter/:texto/:caracter', (req, resp) => {
    try{
        let x = frequenciaCaracter(req.params.texto, req.params.caracter);
        resp.send({
            freq: x
        });
    }
    catch(err) {
        resp.send({
            erro: "Algo deu errado",
            type: err.message
        });
    }
});

server.get('/tabuada', (req, resp) => {
    try{
        let { numero } = req.query;
        let x = tabuada(Number(numero));

        resp.send({
            tabuada: x
        })
    }
    catch(err){
        resp.send({
            erro: "Algo deu errado",
            type: err.message
        });
    }
});


export default server;