function createHeart() {
	const heart = document.createElement('div');
	heart.classList.add('heart');

	heart.style.right = Math.random() * 100 + 'vw';
	heart.style.animationDuration = Math.random() * 2 + 3 + 's';

	heart.innerText = '💜';

	document.body.appendChild(heart);

	setTimeout(() => {
		// console.log(heart);
		heart.remove();
	}, 5000);
}

setInterval(createHeart, 300);
