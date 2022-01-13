document.addEventListener('DOMContentLoaded', () => {
    // let photo = document.querySelector('#home .image')
    // function setPhoto() {
    //     let [photoX] = [photo.clientWidth, photo.clientHeight]
    //     let photoR = photoX / 2
    //     let photoB = 3
    //     photo.style.borderTopRightRadius = `${photoR}px`
    //     photo.style.borderTopLeftRadius = `${photoR}px`
    //     //photo.style.border = `${photoB}px solid transparent`
    // }
    // setPhoto()
    let alertE = document.querySelector('.alert')
    alertE.style.animation = `1s appear`
    setTimeout(() => {
        alertE.style.opacity = '1'
    })
    let abutton = document.querySelector('#alert-button')
    abutton.addEventListener('click', () => {
        alertE.style.animation = `500ms disappear`
        setTimeout(() => {
            alertE.style.display = 'none'
        }, 500)
    })
    let ancs = document.querySelectorAll('a')
    for (let anc of ancs) {
        if (anc.getAttribute("src") != "#") {
            anc.style.color = "skyblue"
        }
    }
})