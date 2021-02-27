const mongoose = require('mongoose');

var Grafico = mongoose.model('Grafico', {
    valor: {
        type: String,
        required: true
    },
    mes: {
        type: String,
        required: true
    },
    ano: {
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
    Grafico
};