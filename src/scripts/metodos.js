let numeros = [1, 2, 3, 4, 5]



function meuMap(array, callBack) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        resultado.push(callBack(array[i], i, array))
    }
    return resultado
}
function callBackMap(elemento, index, array) {
    return `Número ${elemento} no index: ${index}, veio desse array:${array}`
}
console.log(meuMap(numeros, callBackMap))

// --------------------------------------------------------------------------------

function meuFilter(element, callBack) {
    let resultado = []
    for (let i = 0; i < element.length; i++) {
        if (callBack(element[i], i, element) != undefined) {
            resultado.push(element[i])
        }
    }
    return resultado
}
function callBackFilter(element, index, array) {
    if (element > 3) {
        return element
    }
}
console.log(meuFilter(numeros, callBackFilter))

// --------------------------------------------------------------------------------

function meuReduce(element, initialValue, callBack) {
    let retorno = 0
    for (let i = 0; i < element.length; i++) {
        retorno += callBack(element[i], i, element,)
    }
    return retorno + initialValue
}
function callBackReduce(element, index, array) {
    let contador = 0
    contador += element
    return contador
}
console.log(meuReduce(numeros, 3, callBackReduce))
// -------------------------------------------------------------------------------- 

// const found = numeros.find(element => element < 10);

function meuFind(element, find, callBack) {
    for (let i = 0; i < element.length; i++) {
        if (callBack(element[i], find) == true) {
            return element[i]
        }
    }
}
function callBackFind(element, find) {
    // console.log(element)
    if (find > element) {
        return true
    }
}
console.log(meuFind(numeros, 5, callBackFind))
// -------------------------------------------------------------------------------- 

function meuIncludes(element, includes, callBack) {
    for (let i = 0; i < element.length; i++) {
        if (callBack(element[i], i, element, includes) == true){
            return true
        }
    }
    return false
}
function callBackIncludes(element, index, array, includes) {
    if (element == includes) {
        return true
    }
}
console.log(meuIncludes(numeros, 1, callBackIncludes))
// -------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------- 

function meuIndexOf(element, indexOf, callBack, fromIndex = 0){
    for(let i = fromIndex; i < element.length; i++){
        if(callBack(element[i], 0, 0, indexOf) == true){
            return i 
        }
    }
    return -1
}
function callBackIndexOf(element, index, array, indexOf){
    if(element == indexOf){
        return true
    }
}

console.log(meuIndexOf(numeros, 1, callBackIndexOf))