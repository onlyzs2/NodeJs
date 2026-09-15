const produto = {
    id:1,
    nome: 'Teclado',
    preco: 249.9,
    disponivel: true
}


console.log(produto);
console.log(typeof produto);

//---------------------Objeto para string---------------------------

const texto = JSON.stringify(produto)//transforma objeto em string -> {"id":1,"nome":"Teclado","preco":249.9,"disponivel":true}
//const texto = JSON.stringify(produto,null,2)
console.log(texto);
console.log(typeof texto);

//--------------------String para objeto----------------------------

const reconstruido = JSON.parse(texto)
console.log(reconstruido);
console.log(typeof reconstruido);
