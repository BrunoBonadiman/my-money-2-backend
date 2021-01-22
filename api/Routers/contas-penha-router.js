const express = require('express');
const router = express.Router();

const ContasPenhaController = require('../Controllers/contas-penha-controller');

router.get('/listar', ContasPenhaController.listar);
router.get('/:id', ContasPenhaController.buscar);
router.post('/cadastrar', ContasPenhaController.cadastrar);
router.put('/:id', ContasPenhaController.atualizar);
router.delete('/:id', ContasPenhaController.deletar);

module.exports = router;
