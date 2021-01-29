const express = require('express');
const router = express.Router();

const IntegrantesController = require('../Controllers/integrantes-controller');

const jwtHelper = require('../Config/jwtHelper');

router.get('/listar', jwtHelper.verifyJwtToken, IntegrantesController.listar);
router.get('/:id', IntegrantesController.buscar);
router.post('/cadastrar', jwtHelper.verifyJwtToken, IntegrantesController.cadastrar);
router.put('/:id', IntegrantesController.atualizar);
router.delete('/:id', IntegrantesController.deletar);

module.exports = router;
