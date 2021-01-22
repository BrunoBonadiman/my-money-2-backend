const express = require('express');
const router = express.Router();

const ContasFrancieleController = require('../Controllers/contas-franciele-controller');

router.get('/listar', ContasFrancieleController.listar);
router.get('/:id', ContasFrancieleController.buscar);
router.post('/cadastrar', ContasFrancieleController.cadastrar);
router.put('/:id', ContasFrancieleController.atualizar);
router.delete('/:id', ContasFrancieleController.deletar);

module.exports = router;
