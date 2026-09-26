import express from 'express';

const produtos = [
  { id: 1, nome: 'Teclado', preco: 120 },
  { id: 2, nome: 'Mouse', preco: 80 }
];

const app = express();

export function criarAplicacao() {
  try{
    app.use(express.json());
    app.use(express());
    const produtosRoutes = express.Router();
    app.use('/api/produtos', produtosRoutes);
    app.get('/api/produtos',(req,res)=>{
      res.status(200).json({status:'ok'})
    });

  }
  catch(error){
    throw new error('PENDENTE: implemente a rota de listagem.');
  }
}



criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));
