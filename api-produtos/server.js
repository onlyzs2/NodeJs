import { carregarAmbiente } from './config/ambiente.js';

const config = carregarAmbiente('.env');

const { app } = await import('./app.js');
const porta = config.porta || 3000;

app.listen(porta, ()=>{
    console.log(`SERVER rodando em http://localhost:${porta}`);
});