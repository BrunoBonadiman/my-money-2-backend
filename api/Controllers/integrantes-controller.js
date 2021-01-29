var ObjectId = require('mongoose').Types.ObjectId;

var {
    Integrantes
} = require('../Models/integrantes-model');

module.exports.listar = (req, res, next) => {
    Integrantes.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Erro ao recuperar lista de integrantes :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.buscar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

    Integrantes.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao recuperar integrante :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.cadastrar = (req, res, next) => {
    const usuarioId = res.locals.auth_data._id;
    req.body.user = usuarioId;

    var integrante = new Integrantes({
        integrante1: req.body.integrante1,
        integrante2: req.body.integrante2,
        integrante3: req.body.integrante3,
        integrante4: req.body.integrante4,
        user: req.body.user
    });
    integrante.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao cadastrar novo integrante:' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.atualizar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

        var integrante = {
            integrante1: req.body.integrante1,
            integrante2: req.body.integrante2,
            integrante3: req.body.integrante3,
            integrante4: req.body.integrante4,
    };
    Integrantes.findByIdAndUpdate(req.params.id, {
        $set: integrante
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao atualizar integrante :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.deletar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

    Integrantes.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao deletar integrante :' + JSON.stringify(err, undefined, 2));
        }
    });
};