const componenteOriginal = Object.freeze({
  id: 17,
  nome: 'Sensor ultrassônico',
  estoque: 4,
  bancada: 'Robótica'
});

const novoEstoque = Number(process.argv[2] || '12');

function atualizarEstoque(componente, quantidade) {
 if(novoEstoque >= 0 && novoEstoque % 1 == 0 ){
  return{...componente,estoque:quantidade};
 }
 else{
  throw new Error('PENDENTE: implemente a atualização imutável do estoque.');
 }
}

try {
  const componenteAtualizado = atualizarEstoque(componenteOriginal, novoEstoque);
  console.log({ componenteOriginal, componenteAtualizado });
}
 catch (erro) {
  console.error(erro.message);
  process.exitCode = 1;
}
