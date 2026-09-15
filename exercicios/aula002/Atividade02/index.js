const catalogoDaBiblioteca = [
  { tombo: 'L-101', titulo: 'JavaScript Essencial', tipo: 'Livro', disponivel: true },
  { tombo: 'R-205', titulo: 'Tecnologia em Foco', tipo: 'Revista', disponivel: true },
  { tombo: 'L-309', titulo: 'Algoritmos na Prática', tipo: 'Livro', disponivel: false }
];

const tipoDesejado = process.argv[2] || 'Livro';
try{
const res = catalogoDaBiblioteca.filter((tombo)=>tombo.disponivel === true && tombo.tipo === tipoDesejado).map((tombo)=>({tombo: tombo.tombo,titulo: tombo.titulo }));
console.log('Entrada da busca: ', {tipoDesejado, total: res });
} catch{
console.error('PENDENTE: filtre itens disponíveis e projete tombo e título.');
process.exitCode = 1;}''

// TODO: substitua as três linhas acima usando filter e map, sem alterar o catálogo.
