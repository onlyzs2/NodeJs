const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

if (!nomeInformado || !turmaInformada){
    console.error('Informe o nome e a turma');
    process.exitCode=1;
} else {
    console.log({nomeInformado, turmaInformada});
}

