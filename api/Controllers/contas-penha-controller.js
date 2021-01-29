var ObjectId = require('mongoose').Types.ObjectId;

var {
    ContasPenha
} = require('../Models/contas-penha-model');

module.exports.listar = (req, res, next) => {
    ContasPenha.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Erro ao recuperar lista de contas :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.buscar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

    ContasPenha.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao recuperar conta :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.cadastrar = (req, res, next) => {
    const usuarioId = res.locals.auth_data._id;
    req.body.user = usuarioId;

    var conta = new ContasPenha({
        descricao: req.body.descricao,
        detalhe: req.body.detalhe,
        valor: req.body.valor,
        vencimento: req.body.vencimento,
        parcela: req.body.parcela,
        status: req.body.status,
        user: req.body.user
    });
    conta.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao cadastrar conta :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.atualizar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

    var conta = {
        descricao: req.body.descricao,
        detalhe: req.body.detalhe,
        valor: req.body.valor,
        vencimento: req.body.vencimento,
        parcela: req.body.parcela,
        status: req.body.status
    };

    ContasPenha.findByIdAndUpdate(req.params.id, {
        $set: conta
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao atualizar conta :' + JSON.stringify(err, undefined, 2));
        }
    });
};

module.exports.deletar = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Nenhum registro com o ID fornecido : ${req.params.id}`);

    ContasPenha.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Erro ao deletar Conta :' + JSON.stringify(err, undefined, 2));
        }
    });
};