'use strict'

const urlCategorias = 'http://localhost:8080/categorias' 
const urlProdutos = 'http://localhost:8080/produtos'
// const urlProduto = `http://localhost:8080/produto/?produto=${produto}`
// const urlCliente = `http://localhost:8080/cliente/?nome=${nome}`
// const urlComentarios = 'http://localhost:8080/comentarios' 
var imgCatLocal = []

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
        container_categorias.appendChild(imagens_categorias)    
    }


async function mostrarCategorias(){
    const imagens_categorias_final = await pegarCategorias()
    imagens_categorias_final.forEach(criarCategorias)
}


//area de teste
mostrarCategorias()



