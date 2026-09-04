import  {buscarProdutoPorID, listarCategorias } from "./catalogo/consulta.js";
import { carregarAmbiente, exibirDiagnostico } from "./config/ambiente.js";
import { formatarMoeda } from "./utils/formatarMoeda.js";

async function executar() {
    try{
        const configuracao = carregarAmbiente(process.argv[2]);
        const idSolicitado = carregarAmbiente(process.argv[3]);
        if(!Number.isInteger(idSolicitado)) {
            throw new Error('Informe um identificador interiro pra o produto');
        }
        exibirDiagnostico(configuracao);
        const [produto, categorias] = await Promise.all([
            buscarProdutoPorID(idSolicitado),
            listarCategorias()
        ]);
        console.log({
            produto: {
            id:produto.id,
            nome:produto.nome,
            preco:produto.preco,
            precoFormatado: formatarMoeda(produto.preco),
            estoque: produto.estoque,
            categoria: produto.categoria,
            valorEmEstoque: produto.calcularValorEmEstoque(),
            valorEmEstoqueFormado: formatarMoeda(produto.calcularValorEmEstoque())
        }, categorias
        });
    }catch (erro) {
        console.error(erro.message);
        process.exitCode=1;
    }
}
executar();