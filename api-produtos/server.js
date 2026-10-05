import { carregarAmbiente } from './config/ambiente.js';

const config = carregarAmbiente('.env');

const { app } = await import('./app.js');
const porta = config.porta || 3000;

<<<<<<< HEAD
app.listen(porta, ()=>{
    console.log(`SERVER rodando em http://localhost:${porta}`);
=======
app.listen(porta,()=>{
    console.log(`Server rodando em http://localhost:${porta}`)
>>>>>>> 2328ec75058241cadb031ab692d8686515586c45
});