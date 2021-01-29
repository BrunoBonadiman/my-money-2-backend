const express = require('express');
const router = express.Router();

const ContasDecoController = require('../Controllers/contas-deco-controller');
const jwtHelper = require('../Config/jwtHelper');

router.get('/listar', jwtHelper.verifyJwtToken, ContasDecoController.listar);
router.get('/:id', ContasDecoController.buscar);
router.post('/cadastrar', jwtHelper.verifyJwtToken, ContasDecoController.cadastrar);
router.put('/:id', ContasDecoController.atualizar);
router.delete('/:id', ContasDecoController.deletar);

module.exports = router;
