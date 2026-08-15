const btnGuilherme = document.getElementById('btn-no');
const btnMayara = document.getElementById('btn-yes');
const questionContainer = document.getElementById('question-container');
const successContainer = document.getElementById('success-container');
const confettiContainer = document.getElementById('confetti-container');
const mensagemFuga = document.getElementById('mensagem-fuga');

const frases = [
    'O Guilherme escapou!',
    'Ele não vai pagar, tente outra opção...',
    'Quase pegou o Guilherme!',
    'Acho que só sobrou a Mayara 👀',
    'Desiste, ele continua fugindo kkkkk'
];

let contadorFugas = 0;
let chuvaIniciada = false;

function fugir(event) {
    if (event) event.preventDefault();

    btnGuilherme.style.position = 'fixed';

    const margem = 12;
    const larguraDisponivel = Math.max(0, window.innerWidth - btnGuilherme.offsetWidth - margem * 2);
    const alturaDisponivel = Math.max(0, window.innerHeight - btnGuilherme.offsetHeight - margem * 2);

    const randomX = Math.floor(Math.random() * larguraDisponivel) + margem;
    const randomY = Math.floor(Math.random() * alturaDisponivel) + margem;

    btnGuilherme.style.left = `${randomX}px`;
    btnGuilherme.style.top = `${randomY}px`;

    mensagemFuga.innerText = frases[Math.min(contadorFugas, frases.length - 1)];
    contadorFugas++;
}

btnGuilherme.addEventListener('pointerenter', fugir);
btnGuilherme.addEventListener('pointerdown', fugir);
btnGuilherme.addEventListener('click', fugir);

btnMayara.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
    confettiContainer.classList.remove('hidden');

    if (!chuvaIniciada) {
        chuvaIniciada = true;
        iniciarChuva();
    }
});

function iniciarChuva() {
    setInterval(() => {
        const elemento = document.createElement('div');

        if (Math.random() > 0.5) {
            elemento.classList.add('ice-cream');
            elemento.innerText = '🍦';
        } else {
            elemento.classList.add('confetti');
            const cores = ['#da291c', '#ffc72c', '#ffffff', '#ff8c42', '#6a994e'];
            elemento.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
            elemento.style.width = `${Math.random() * 10 + 5}px`;
            elemento.style.height = `${Math.random() * 20 + 10}px`;
        }

        elemento.style.left = `${Math.random() * 100}vw`;
        elemento.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(elemento);

        setTimeout(() => elemento.remove(), 5000);
    }, 90);
}

