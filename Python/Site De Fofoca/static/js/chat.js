const menu = document.querySelector('.menu')
const drop = document.querySelector('.more ul')
const closed = document.querySelector('.closed')
const msg = document.querySelector('.msg')
const enviar = document.querySelector('#enviar')
const imgs = document.querySelectorAll('.img') // seleciona todas as imagens
const EMOJY = document.querySelector('.emoji')

menu.addEventListener('click',()=>{
    drop.style.bottom='0px'
   
})
closed.addEventListener('click',()=>{
    drop.style.bottom='1000px'
  
})

msg.addEventListener('input',()=>{
    msg.style.height='auto';
    msg.style.height = msg.scrollHeight + 'px';
})
enviar.addEventListener('click',()=>{
    send()

})

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        send()
    
    }
});
EMOJY.addEventListener('click',()=>{
  fetch('https://emoji-api.com/emojis?access_key=3c3d7f16cf42be63df37bb5a378e2cb34bd59247')
  .then(respose =>respose.json())
  .then(data =>{
    console.log(data)
   let EMO = data[0].character; // obter o código do emoji

   if (EMOJY) {
    document.querySelector('.myElement').innerHTML = EMO;
   }
  })
})


function send(){
    let http = new XMLHttpRequest();
    http.onreadystatechange = ()=>{
        if(http.status == 200){
            console.log(http.responseText);
            //resposta do servidor
        }
    };
    http.open('POST','/send',true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    let text = document.querySelector('.msg')
    http.send("msg="+text.value);
    text.value = ''
}   

let jsonAnterior = null; // inicializa a variável que armazena o JSON retornado anteriormente como nulo

function UpdateMSg() {
  let http = new XMLHttpRequest();
  http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200) {
      const data = http.responseText;
      const jsonAtual = JSON.parse(data);

      if (JSON.stringify(jsonAtual) !== JSON.stringify(jsonAnterior)) { // compara o JSON retornado mais recentemente com o JSON anterior
        jsonAnterior = jsonAtual; // atualiza o JSON anterior com o JSON mais recente
        let frame = document.querySelector('.frame');
        frame.innerHTML = ''; // limpa o conteúdo do elemento antes de adicionar o novo conteúdo

        if (Array.isArray(jsonAtual)) {
          jsonAtual.forEach((e, i) => {
            let person = document.createElement('div');
            let img = document.createElement('img');
            let nome = document.createElement('div');
            let txt = document.createElement('div');

            person.classList.add('person');
            img.classList.add('img');
            nome.classList.add('nome');
            txt.classList.add('txt');

            frame.append(person);
            person.append(img, nome, txt);

            nome.textContent = e[0];
            txt.textContent = e[1];
            

            setTimeout(() => {
              let frameElement = document.querySelector('.frame');
              frameElement.scrollTop = 10000000000;
            }, 100);

            const xh = new XMLHttpRequest();
            xh.open('GET', '/img', true);
            xh.onload = () => {
              if (xh.status == 200) {
                const response = xh.response;
                const dirImg = response.replace(/"/g, '');
                let newname = e[0] + '.png'

                if (dirImg === newname) {
                  console.log(newname, newname2)
                  img.src = '/static/img/avatar/' + dirImg;
                }

              }
            };
            xh.send();
          });
        }
      }
    }
  };
  http.open('GET', '/msg', true);
  http.send();
}

UpdateMSg();

setInterval(() => {
  UpdateMSg(); 
}, 100); 