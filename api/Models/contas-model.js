const mongoose = require('mongoose');

var Contas = mongoose.model('Contas', {
    descricao: {
        type: String,
        required: true
    },
    valorTotal: {
        type: String,
        required: true
    },
    vencimento: {
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
    Contas
};