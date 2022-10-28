// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')
// const retryBtn = document.querySelector('#trash');

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })


// document.querySelector(".subTotalPreco");
// document.querySelector(".produtoPreco");
// let todosPrecos = document.querySelectorAll(".subTotalPreco");
// moedaParaFloat(todosPrecos[0].innerHTML)

// let todasQuantidades = document.querySelector(".quantidadePreco");
// moedaParaFloat(todasQuantidades[0].value);

// function moedaParaFloat(valor){
//   let textoLimpo = valor.replace("R$" , "").replace(",",".");
//   return pardeFloat(textoLimpo)
// }

// function calcularTotalProdutos(){
//   let todosProdutos = document.querySelectorAll(".produtoPreco");
//   let todasQuantidades = document.querySelectorAll(".quantidadePreco");
//   let totalProdutos = 0;
//   for(let posicao = 0; posicao < todosProdutos.length ; posicao++){
//     let umPreco = moedaParaFloat(todosProdutos[posicao])
      
//   }
// }

function calculaSubtotal(id, preco){
  const subTotalPreco = document.querySelector(`#subTotalPreco-${id}`);
  const quantidadePreco = document.querySelector(`#quantidadePreco-${id}`)
  const calculo = preco * quantidadePreco.value
  subTotalPreco.innerText = `R$ ${calculo},00 `
}


