// source/js/sakura.js

document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.className = 'sakura';

    for (let i = 0; i < 100; i++) {
        const sakura = document.createElement('img');
        sakura.src = 'https://img2.imgtp.com/2024/02/03/nHmmn9Px.jpg'; // 替换为你的樱花图片路径
        sakura.style.left = `${Math.random() * 100}vw`;
        sakura.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(sakura);
    }

    document.body.appendChild(container);
});
