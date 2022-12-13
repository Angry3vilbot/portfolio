import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'

let hider: number
function showMeme() {
    if (document.querySelector('#meme-container')?.classList.contains('hidden')) {
        document.querySelector('#meme-container')?.classList.remove('hidden')
        clearTimeout(hider)
        hider = setTimeout(showMeme, 3000)
    }
    else {
        document.querySelector('#meme-container')?.classList.add('hidden')
        clearTimeout(hider)
    }
}

function showImage(ev: any) {
    if(ev.type === 'mouseover'){
        switch(ev.currentTarget.attributes[1].nodeValue){
            case 'gaming':
                ev.currentTarget.parentElement.parentElement.querySelector('.gaming').classList.remove('hidden')
                break
            case 'vr':
                ev.currentTarget.parentElement.parentElement.querySelector('.vr').classList.remove('hidden')
                break
            case 'cycling':
                ev.currentTarget.parentElement.parentElement.querySelector('.cycling').classList.remove('hidden')
                break
            case 'english':
                ev.currentTarget.parentElement.parentElement.querySelector('.english').classList.remove('hidden')
                break
        }
    }
    else{
        switch(ev.currentTarget.attributes[1].nodeValue){
            case 'gaming':
                ev.currentTarget.parentElement.parentElement.querySelector('.gaming').classList.add('hidden')
                break
            case 'vr':
                ev.currentTarget.parentElement.parentElement.querySelector('.vr').classList.add('hidden')
                break
            case 'cycling':
                ev.currentTarget.parentElement.parentElement.querySelector('.cycling').classList.add('hidden')
                break
            case 'english':
                ev.currentTarget.parentElement.parentElement.querySelector('.english').classList.add('hidden')
                break
        }
    }
}

document.querySelector('#grievous')?.addEventListener('click', showMeme)
document.querySelector('#freetime')?.querySelectorAll('span').forEach((span) => {
    span.addEventListener('mouseover', showImage)
    span.addEventListener('mouseleave', showImage)
})

const slider: any = document.querySelector('.blaze-slider')
new BlazeSlider(slider, {
    all: {
        loop: true,
        enableAutoplay: true,
        autoplayInterval: 2000,
        transitionDuration: 300,
        slidesToShow: 3,
    },
    '(max-width: 900px)': {
        slidesToShow: 2,
    },
    '(max-width: 500px)': {
        loop: true,
        slidesToShow: 1,
    },
})
export { }