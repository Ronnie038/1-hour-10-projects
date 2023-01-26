const btn = document.querySelector('button');
const body = document.body;
btn.addEventListener('click', () => {
	if (!body.classList.contains('dark-mode')) {
		body.classList.toggle('dark-mode');
		btn.textContent = 'Light mode';
	} else {
		body.classList.toggle('dark-mode');
		btn.textContent = 'Dark mode';
	}
});
