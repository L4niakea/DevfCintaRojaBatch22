/* 

3. A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30

*/

let lista = [1, 3, 5, 7, 9];

let multiplicar = [];

multiplicar = lista.filter(lista =>{
    return lista * 7;
});

console.log(multiplicar)