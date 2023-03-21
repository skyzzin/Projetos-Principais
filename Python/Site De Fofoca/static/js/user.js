

function UpdateAvatar(){
    let http = new XMLHttpRequest()
    http.open('GET','/img',true)
    http.responseType = 'json'
    http.onload = ()=>{
        
        const img = http.response
        const avatar = document.querySelector('#avatar-img')
        avatar.src = '/static/img/avatar/'+img
    }
    http.send()
}
UpdateAvatar()