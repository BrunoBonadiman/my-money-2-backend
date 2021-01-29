const express = require('express');
const router = express.Router();

const ContasFrancieleController = require('../Controllers/contas-franciele-controller');
const jwtHelper = require('../Config/jwtHelper');

router.get('/listar', jwtHelper.verifyJwtToken, ContasFrancieleController.listar);
router.get('/:id', ContasFrancieleController.buscar);
router.post('/cadastrar', jwtHelper.verifyJwtToken, ContasFrancieleController.cadastrar);
router.put('/:id', ContasFrancieleController.atualizar);
router.delete('/:id', ContasFrancieleController.deletar);

module.exports = router;
