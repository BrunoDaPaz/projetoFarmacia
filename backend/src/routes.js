const express = require('express');
const routes = express.Router();
const crypto = require('crypto');

const connection = require('./database/connection')

routes.use(express.json());

routes.post('/cadastrarCliente/', async (request, response) => {
    const { nome, cpf, email, telefone, cidade, bairro, cep } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('cliente').insert(
        {
            id, nome, cpf, email, telefone, cidade, bairro, cep
        });
    return response.json({ id });
});
routes.get('/consultarCliente/', async (request, response) => {
    const clientes = await connection('cliente').select('*');
    return response.json(clientes);
});

routes.post('/cadastrarUsuario/', async (request, response) => {
    const { nome, nome_usuario, senha, email, telefone, cidade, bairro, cep } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('usuario').insert(
        {
            id, nome, nome_usuario, senha, email, telefone, cidade, bairro, cep
        });
    return response.json({ id });
});
routes.get('/consultarUsuario/', async (request, response) => {
    const usuarios = await connection('usuario').select('*');
    return response.json(usuarios);
});

routes.post('/cadastrarProduto/', async (request, response) => {
    const { nome, qtd_estoque, preco, categoria } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('produto').insert(
        {
            id, nome, qtd_estoque, preco, categoria
        });
    return response.json({ id });
});
routes.get('/consultarProduto/', async (request, response) => {
    const produtos = await connection('produto').select('*');
    return response.json(produtos);
});

module.exports = routes;