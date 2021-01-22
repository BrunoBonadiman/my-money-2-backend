const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContasBruno = mongoose.model('ContasBruno', {
    descricao: {
        type: String,
        required: true
    },
    detalhe: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    },
    vencimento: {
        type: String,
        required: true
    },
    parcela: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = {
    ContasBruno
};