const mongoose = require('mongoose');

var Integrantes = mongoose.model('Integrantes', {
    integrante1: {
        type: String,
        required: true
    },
    integrante2: {
        type: String,
        required: true
    },
    integrante3: {
        type: String,
        required: true
    },
    integrante4: {
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
    Integrantes
};