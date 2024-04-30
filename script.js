const persona = document.querySelector('.persona');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvens');
const grama = document.querySelector('.grama')


const jump = () =>{
    persona.classList.add('jump');

    setTimeout(() => {
        persona.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePose = pipe.offsetLeft;
    const personaPosi = +window.getComputedStyle(persona).bottom.replace('px', '');

    if (pipePose <= 120 && pipePose > 0 && personaPosi < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePose}px`;

        persona.style.animation = 'none';
        persona.style.bottom = `${personaPosi}px`;

        nuvem.style.animation = 'none';

        grama.style.animation = 'none';

        persona.src = 'imgs/gameover.png';
        persona.style.width = '75px';
        persona.style.margin = '50px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('click', jump);