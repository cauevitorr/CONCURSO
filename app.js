const inNome = document.getElementById("inNome")
const inAcertos = document.getElementById("inAcertos")
const btnAdicionar = document.getElementById("btnAdicionar")
const btnListar = document.getElementById("btnListar")
const btnAprovados = document.getElementById("btnAprovados")
const outLista = document.getElementById("outLista")

const inscritos = []

const adicionarInscrito = () => {
 const nome = inNome.value
 const acertos = Number(inAcertos.value)
 if(nome === '' || acertos === 0 || isNaN(acertos)){
     alert('Preencha os dados corretamente')
     inNome.focus
     return
 }
 inscritos.push({nome: nome, pontuação: acertos})

 let lista = ''
 inscritos.forEach((inscrito)=>{
     return lista += `Candidato: ${inscrito.nome} - Pontuação: ${inscrito.pontuação}\n`
 })
 
 outLista.textContent = lista

 console.log(inscritos)
 inNome.value = ''
 inAcertos.value = ''
};
btnAdicionar.addEventListener("click", adicionarInscrito);

const listarInscritos = () => {
 if(inscritos.length == 0){
     alert('Não há crianças no sistema')
     return    
 }
 let lista = ''
inscritos.forEach((inscrito) =>{
     return lista += `Nome: ${inscrito.nome} - Pontuação: ${inscrito.pontuação}\n`
 })
 console.log(lista)
 outLista.textContent = lista
}
 btnListar.addEventListener('click', listarInscritos)

 const OrdenarPorAcertos = () => {
  const notaCorte = Number(prompt('Digite a nota de corte'))
  if(notaCorte <= 0 || isNaN(notaCorte)){
   alert('Nota inválida')
   return  
  }
  const filtrarCandidatos = inscritos.filter((candidato) => {
   return candidato.pontuação >= notaCorte
  })
  console.log(filtrarCandidatos)

  const ordem = filtrarCandidatos.sort((a,b) => {
   return b.pontuação - a.pontuação
  })

  console.log(ordem)

  let lista = ''
   filtrarCandidatos.forEach((inscrito) => {
       return (lista += `${inscrito.nome} - ${inscrito.pontuação}\n`)
   })
 
  outLista.textContent = lista
 }
  btnAprovados.addEventListener('click', OrdenarPorAcertos)

