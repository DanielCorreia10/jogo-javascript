//dom

const homer = document.querySelector('.homer');
const pipe = document.querySelector('.pipe');

const jump = () => {

    homer.classList.add('jump');

    setTimeout(() => {

        homer.classList.remove('jump');
    

    }, 550)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const homerPosition = +window.getComputedStyle(homer).bottom.replace('px','');

    if (pipePosition <= 290 && pipePosition > 100 && homerPosition <= 120){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        homer.style.animation = 'none';
        homer.style.bottom = `${homerPosition}px`

        homer.src = 'src/files/homer-perdeu-removebg-preview.png';
        homer.style.width = '150px'
        homer.style.marginLeft = '80px'

        clearInterval(loop);

    }

}, 10);

//evento e funcao

document.addEventListener('keydown',jump);