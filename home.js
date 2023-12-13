'use strict'

const urlCategorias = 'http://localhost:8080/categorias' 
const urlProdutos = 'http://localhost:8080/produtos'
// const urlProduto = `http://localhost:8080/produto/?produto=${produto}`
// const urlCliente = `http://localhost:8080/cliente/?nome=${nome}`
// const urlComentarios = 'http://localhost:8080/comentarios' 
var imgCatLocal = []
var pizzasRecLocal = []
/********************************************************************* */

async function pegarCategorias(){
    const responseCat = await fetch(urlCategorias)
    const dadosCat = await responseCat.json()
    const arrayCategorias = dadosCat.categorias

    arrayCategorias.forEach(categorias => {
        imgCatLocal.push(categorias.img_categoria)        
    });

    return imgCatLocal
}

function criarCategorias(imgCatLocal){
        const container_categorias = document.getElementById('container-categorias')
        const imagens_categorias = document.createElement('img')
        imagens_categorias.src = imgCatLocal
        imagens_categorias.classList.add('img-categorias')
        container_categorias.appendChild(imagens_categorias)    
    }


async function mostrarCategorias(){
    const imagens_categorias_final = await pegarCategorias()
    imagens_categorias_final.forEach(criarCategorias)
}
/*************************************************************************** */
async function pegarPizzasRec(){
    const responseProd = await fetch(urlProdutos)
    const dadosProd = await responseProd.json()
    const arrayProd = dadosProd.dados
    const json_pizzas = {}

    arrayProd.forEach(produto => {
     if(produto.categoria.nome_categoria == "Pizza"){ 
        json_pizzas.nome = produto.titulo
        json_pizzas.img = produto.imagem
        json_pizzas.preco = produto.preco
        pizzasRecLocal.push(json_pizzas)
     }
    });

    console.log(pizzasRecLocal)
}


//area de teste
mostrarCategorias()
pegarPizzasRec()



