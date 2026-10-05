import express from 'express';

export function criarProdutoRoutes({
    produtoController }) {
        const router = express.Router();
        
        router.get('/', produtoController.listar);
        router.get('/', produtoController.buscar);
        router.get('/', produtoController.crirar);
        return router
        }