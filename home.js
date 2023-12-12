'use strict'

const urlCategorias = 'http://localhost:8080/categorias' 
const urlProdutos = 'http://localhost:8080/produtos'
// const urlProduto = `http://localhost:8080/produto/?produto=${produto}`
// const urlCliente = `http://localhost:8080/cliente/?nome=${nome}`
// const urlComentarios = 'http://localhost:8080/comentarios' 

async function pegarCategorias(){
    const responseCat = await fetch(urlCategorias)
    const dadosCat = await responseCat.json()
    const arrayCategorias = dadosCat.categorias
    const imgLocal = []

    arrayCategorias.forEach(categorias => {
        imgLocal.push(categorias.img_categoria)        
    });

    return imgLocal
}

function criarCategorias(
    
){
    console.log(imgLocal)

    imgLocal.forEach(categorias => {
                
    });

}



//area de teste
  //pegarCategorias()
  criarCategorias()




