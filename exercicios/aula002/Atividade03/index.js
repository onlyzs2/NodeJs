const codigoDoPedido = process.argv[2] || 'PED-104';

function consultarSituacao(codigo) {
  // TODO: devolva uma Promise que resolva ou rejeite depois de 60 ms.
  (resolve)=>setTimeout
  return Promise.reject(new Error('PENDENTE: implemente a Promise de consulta.'));
}

consultarSituacao(codigoDoPedido)
  .then((situacao) => console.log(situacao))
  .catch((erro) => {
    console.error(erro.message);
    process.exitCode = 1;
  });
