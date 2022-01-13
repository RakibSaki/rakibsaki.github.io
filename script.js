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
        console.log(`${anc.innerHTML} is ${anc.getAttribute("href")}`)
        if (anc.getAttribute("href")[0] != "#") {
            anc.style.color = "blue"
            anc.style.textDecoration = "underline"
        }
    }
    let sectionHeight = innerHeight - 80
    let navs = document.querySelectorAll('nav ul li a')
    for (let i = 0; i < navs.length; i++) {
        navs[i].addEventListener('click', e => {
            e.preventDefault()
            window.scrollTo(0, sectionHeight * i)
        })
    }
    let sections = document.querySelectorAll('section')
    function adjustSectionHues(scrollY) {
        console.log(scrollY / sectionHeight)
        for (let i = 0; i < sections.length; i++) {
            if (scrollY < sectionHeight * (i - 1)) {
                sections[i].style.setProperty('--scrollX', '0%')
            } else if (scrollY > sectionHeight * (i + 1)) {
                sections[i].style.setProperty('--scrollX', '100%')
            } else {
                sections[i].style.setProperty('--scrollX', `${50 + parseInt(50 * (scrollY - (sectionHeight * i)) / sectionHeight)}%`)
            }
            sections[i].style.background = sections[i].style.background
        }
    }
    document.addEventListener('scroll', () => {
        adjustSectionHues(window.scrollY)
    })
})