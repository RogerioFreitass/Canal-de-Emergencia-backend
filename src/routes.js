const express = require('express');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/emergencies', async (request, response) => {
    const emergencies = await connection('emergencies').select('*');

    return response.json(emergencies);
});

routes.post('/emergencies', async (request, response) => {
    const { tipo, id_usuario, nome_usuario, foto_emergencia, foto_local, descricao, status, horario } = request.body;

    await connection('emergencies').insert({
        tipo,
        id_usuario,
        nome_usuario,
        foto_emergencia,
        foto_local,
        descricao,
        status,
        horario
    });

    return response.status(204).send();
});

routes.delete('/emergencies/:id', async (request, response) => {
    const { id } = request.params;

    await connection('emergencies').where('id', id).delete();

    return response.status(204).send();
})

module.exports = routes;