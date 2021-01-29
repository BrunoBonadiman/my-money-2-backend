const express = require('express');
const router = express.Router();

const ContasController = require('../Controllers/contas-controller');

const jwtHelper = require('../Config/jwtHelper');

router.get('/listar', jwtHelper.verifyJwtToken, ContasController.listar);
router.get('/:id', ContasController.buscar);
router.post('/cadastrar', jwtHelper.verifyJwtToken, ContasController.cadastrar);
router.put('/:id', ContasController.atualizar);
router.delete('/:id', ContasController.deletar);

module.exports = router;
