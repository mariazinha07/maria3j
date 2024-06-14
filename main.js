const botoes = document.querySelectorAll(".botao")
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
tempo[0].textContent="Ola"
console.log(tempo)
for  (let j = 0; 1 < botoes.length ; i++){
   botoes[j].classList.remove("ativo");
   conteudo[1].classList.remove("ativo")
}
botoes[i].classList.add("ativo")
conteudo[1].classList.add("ativo")
