


const menu = document.querySelector('.menu')
const ul = document.querySelector('nav ul')

menu.addEventListener('click',()=>{
    if(ul.style.display='none'){
        ul.style.display='flex'
    }
    else{
        ul.style.display='none'
    }
})

document.querySelector('.closed').addEventListener('click',()=>{
    ul.style.display='none'
})

document.querySelector('nav ul   ').addEventListener('click',(e)=>{
    const valor = e.target.innerText
if(ul.style.display == 'flex' && e.target.innerText.length < 20){
    e.target.addEventListener('click',ul.style.display='none')
   
}
})
