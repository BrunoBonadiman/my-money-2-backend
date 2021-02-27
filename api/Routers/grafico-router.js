const express = require('express');
const router = express.Router();

const GraficoController = require('../Controllers/grafico-controller');

const jwtHelper = require('../Config/jwtHelper');

router.get('/listar', jwtHelper.verifyJwtToken, GraficoController.listar);
router.get('/:id', GraficoController.buscar);
router.post('/cadastrar', jwtHelper.verifyJwtToken, GraficoController.cadastrar);
router.put('/:id', GraficoController.atualizar);
router.delete('/:id', GraficoController.deletar);

module.exports = router;
