const express = require('express');
const router = express.Router();

const ContasPenhaController = require('../Controllers/contas-penha-controller');
const jwtHelper = require('../Config/jwtHelper');

router.get('/listar', jwtHelper.verifyJwtToken, ContasPenhaController.listar);
router.get('/:id', ContasPenhaController.buscar);
router.post('/cadastrar', jwtHelper.verifyJwtToken, ContasPenhaController.cadastrar);
router.put('/:id', ContasPenhaController.atualizar);
router.delete('/:id', ContasPenhaController.deletar);

module.exports = router;
