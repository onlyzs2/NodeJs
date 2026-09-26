import express from 'express';
// // Middleware: ensina o Express a ler o corpo da requisiçãop e, JSON
// // middleware programas menores destinados a desempenhar uma função específica
const app = express();

export function criarAplicacao() {
  try {
        app.use(express.json());//reqs em json
        app.use(express());
        const saudeRoutes = express.Router();
        app.use('/api/saude',saudeRoutes);
        app.get('/api/saude',(req,res)=>{
                        res.status(200).json({status:'ok'});
        });
            }
  catch (error) {
    throw new error('PENDENTE: implemente o primeiro servidor Express.');  
  }
}
// }

criarAplicacao();// const app = 
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));