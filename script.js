const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
console.log(mario);

const jump = () => {
    mario.classList.add('jump')


    setTimeout(() => { 
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePos = pipe.offsetLeft
    const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '')
    const over = document.querySelector('h1#fonte')

    if(pipePos <= 120 && pipePos > 0 && marioPos < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePos}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPos}px`;

        mario.src = './imagens2/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        over.innerHTML = '<h1>Game Over!</h1>'




        clearInterval(loop)
    }
}, 10)
document.addEventListener('keydown', jump);