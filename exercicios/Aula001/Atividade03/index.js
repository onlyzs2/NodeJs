const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

if(!nomeInformado && !turmaInformada){
    
console.error('ERRO! -> informe seu nome e turma para realizar a inscrição.');
process.exitCode = 1;
}
else{
console.log('Inscrição finalizada com acesso:', { nomeInformado, turmaInformada });
}

// TODO: substitua as três linhas acima pela validação e pela confirmação pedidas.
