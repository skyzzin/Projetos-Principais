const btn = document.querySelector('.submit')

const Send = ()=>{
    let titulo = document.querySelector('.titulo').value
    let tamanho = document.querySelector('.tamanho').value
    let valor = document.querySelector('.valor').value
    let quartos = document.querySelector('.quartos').value
    let banheiros = document.querySelector('.banheiros').value
    let garagens = document.querySelector('.garagens').value
    let estado = document.querySelector('.estado').value
    let desc = document.querySelector('.desc').value
    let foto = document.querySelector('.foto').value

    const data = {
        titulo: titulo,
        tamanho: tamanho,
        valor: valor,
        quartos: quartos,
        banheiros: banheiros,
        garagens: garagens,
        estado: estado,
        desc:desc
    }

   
    const formData = new FormData();
    formData.append("foto", foto);
    for (const key in data) {
        formData.append(key, data[key]);
    }

    fetch('http://127.0.0.1:5000/addproduto', {
        method: 'POST',
        headers: { 'enctype': 'multipart/form-data' },
        body: formData
    })
    
   
}

btn.addEventListener('click',Send)