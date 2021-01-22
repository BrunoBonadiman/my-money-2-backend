const express = require('express');
const router = express.Router();

const ContasDecoController = require('../Controllers/contas-deco-controller');

router.get('/listar', ContasDecoController.listar);
router.get('/:id', ContasDecoController.buscar);
router.post('/cadastrar', ContasDecoController.cadastrar);
router.put('/:id', ContasDecoController.atualizar);
router.delete('/:id', ContasDecoController.deletar);

module.exports = router;
