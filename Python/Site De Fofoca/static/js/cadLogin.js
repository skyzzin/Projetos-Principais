const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const senha1 = document.querySelector('#senha1')
const senha2 = document.querySelector('#senha2')
const btn = document.querySelector('#submit')

btn.addEventListener('click',(e)=>{
  if(senha1.value != senha2.value){
    senha1.style.border='1px solid red'
    senha2.style.border='1px solid red'
    e.preventDefault()
  }
  else{
    console.log('Cadastrado')
  }
})