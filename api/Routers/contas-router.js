const express = require('express');
const router = express.Router();

const ContasController = require('../Controllers/contas-controller');

router.get('/listar', ContasController.listar);
router.get('/:id', ContasController.buscar);
router.post('/cadastrar', ContasController.cadastrar);
router.put('/:id', ContasController.atualizar);
router.delete('/:id', ContasController.deletar);

module.exports = router;
