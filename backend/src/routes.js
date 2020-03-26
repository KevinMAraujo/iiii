const express = require('express');
//const crypto = require('crypto');
//const connection = require('./database/connection');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Kevin Araujo'
    });
});
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

/*routes.post('/ongs', async (request, response) => {
    //const data = request.body;
    //console.log(data)
    const {name, email, whatsapp, city, uf} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json(id);

});*/

/*routes.get('/ongs', async (request, response)=> {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});*/
module.exports = routes;