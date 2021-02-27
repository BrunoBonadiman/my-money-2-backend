var ObjectId = require('mongoose').Types.ObjectId;

var {
    Grafico
} = require('../Models/grafico-model');

module.exports.listar = (req, res, next) => {
    Grafico.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Erro ao recuperar relatório mensal de gastos :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.buscar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

    Grafico.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao recuperar dados do relatório :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.cadastrar = (req, res, next) => {
    const usuarioId = res.locals.auth_data._id;
    req.body.user = usuarioId;

    var grafico = new Grafico({
        valor: req.body.valor,
        mes: req.body.mes,
        ano: req.body.ano,
        user: req.body.user
    });
    grafico.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao realizar cadastro:' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.atualizar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

        var grafico = {
            valor: req.body.valor,
            mes: req.body.mes,
            ano: req.body.ano,
    };
    Grafico.findByIdAndUpdate(req.params.id, {
        $set: grafico
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Falha ao atualizar registro:' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.deletar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

    Grafico.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Falha ao deletar registro:' + JSON.stringify(err, undefined, 2));
        }
    });
};