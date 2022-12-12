import BlazeSlider from 'blaze-slider'
import 'blaze-slider/dist/blaze.css'
let hider : number
function showMeme(){

    if(document.querySelector('#meme-container')?.classList.contains('hidden')){
        document.querySelector('#meme-container')?.classList.remove('hidden')
        clearTimeout(hider)
        hider = setTimeout(showMeme, 3000)
    }
    else{
        document.querySelector('#meme-container')?.classList.add('hidden')
        clearTimeout(hider)
    }
}
document.querySelector('#grievous')?.addEventListener('click', showMeme)

const slider : any = document.querySelector('.blaze-slider')
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
export{}