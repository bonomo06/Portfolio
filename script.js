const Ainstagram = document.getElementById('a-instagram')
const Alinkedin = document.getElementById('a-linkedin')
const Agithub = document.getElementById('a-github')
const instagramIcon = document.getElementById('instagram')
const linkedinIcon = document.getElementById('linkedin')
const githubIcon = document.getElementById('github')
const digitacao = document.getElementById('digitacao')

Ainstagram.addEventListener('mouseenter', () => {
    setTimeout(() => {
        instagramIcon.src = 'imgs/instagram.png'
    }, 500)
})

Alinkedin.addEventListener('mouseenter', () => {
    setTimeout(() => {
        linkedinIcon.src = 'imgs/logotipo-do-linkedin.png'
    }, 500)
})

Agithub.addEventListener('mouseenter', () => {
    setTimeout(() => {
        githubIcon.src = 'imgs/github.png'
    }, 500)
})

Ainstagram.addEventListener('mouseleave', () => {
        instagramIcon.src = 'imgs/icons8-instagram-24.png'
})

Alinkedin.addEventListener('mouseleave', () => {
        linkedinIcon.src = 'imgs/icons8-linkedin-24.png'
})

Agithub.addEventListener('mouseleave', () => {
        githubIcon.src = 'imgs/icons8-github-24.png'
})

const texts = ['Student.', 'Web developer.', 'Fullstack developer.']
let textIndex = 0
let charIndex = 0
let isDeleting = false

function type() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        digitacao.innerHTML = "I'm a " + currentText.substring(0, charIndex + 1) + '<span id="cursor">‎</span>';
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        digitacao.innerHTML = "I'm a " + currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    const typingSpeed = isDeleting ? 100 : 150;
    setTimeout(type, typingSpeed);
}

type();