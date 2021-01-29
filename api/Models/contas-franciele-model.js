const mongoose = require('mongoose');

var ContasFranciele = mongoose.model('ContasFranciele', {
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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = {
    ContasFranciele
};