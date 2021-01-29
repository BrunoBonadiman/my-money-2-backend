const express = require('express');
const router = express.Router();

const ContasBrunoController = require('../Controllers/contas-bruno-controller');
const jwtHelper = require('../Config/jwtHelper');

router.get('/listar', jwtHelper.verifyJwtToken, ContasBrunoController.listar);
router.get('/:id', ContasBrunoController.buscar);
router.post('/cadastrar', jwtHelper.verifyJwtToken, ContasBrunoController.cadastrar);
router.put('/:id', ContasBrunoController.atualizar);
router.delete('/:id', ContasBrunoController.deletar);

module.exports = router;
