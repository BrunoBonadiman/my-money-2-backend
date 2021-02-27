require('./Config/config');
require('./Models/db');
require('./Config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

const rtsIndex = require('./Routers/user-router');
const rtsContas = require('./Routers/contas-router');
const rtsContasBruno = require('./Routers/contas-bruno-router');
const rtsContasFranciele = require('./Routers/contas-franciele-router');
const rtsContasDeco = require('./Routers/contas-deco-router');
const rtsContasPenha = require('./Routers/contas-penha-router');
const rtsIntegrantes = require('./Routers/integrantes-router');
const rtsGrafico = require('./Routers/grafico-router');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/api/contas', rtsContas);
app.use('/api/contas/bruno', rtsContasBruno);
app.use('/api/contas/franciele', rtsContasFranciele);
app.use('/api/contas/deco', rtsContasDeco);
app.use('/api/contas/penha', rtsContasPenha);
app.use('/api/contas/integrantes', rtsIntegrantes);
app.use('/api/contas/grafico', rtsGrafico);

app.use('/files',express.static(path.resolve(__dirname, './tmp/uploads')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    } else {
        console.log(err);
    }
});

app.listen(process.env.PORT || 3001);