const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        event: 'Semana OmniStack 11.0',
        date: '23/03 - 29/03',
        alumn: 'Igor Simon',
        age: 20
    });
});

app.listen(3333);