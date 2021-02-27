const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, (err) => {
    if (!err) {
        console.log('Conexão estabelecida com sucesso.');
    } else {
        console.log('Falha ao conectar com a Base de Dados : ' + JSON.stringify(err, undefined, 2));
    }
});

require('./user-model');
require('./contas-model');
require('./contas-bruno-model');
require('./contas-franciele-model');
require('./contas-deco-model');
require('./contas-penha-model');
require('./integrantes-model');
require('./grafico-model');