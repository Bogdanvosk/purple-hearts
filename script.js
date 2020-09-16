function createHeart() {
    const heart = document.createElement('div');

    heart.classList.add('heart');
    heart.innerHTML = '💜';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

    heart.addEventListener('click', () => {
        heart.style.opacity = 0;
    })
}

setInterval(createHeart, 500);