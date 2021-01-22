const express = require('express');
const router = express.Router();

const ContasBrunoController = require('../Controllers/contas-bruno-controller');

router.get('/listar', ContasBrunoController.listar);
router.get('/:id', ContasBrunoController.buscar);
router.post('/cadastrar', ContasBrunoController.cadastrar);
router.put('/:id', ContasBrunoController.atualizar);
router.delete('/:id', ContasBrunoController.deletar);

module.exports = router;
