const inputEl = document.querySelector('.container__num');
const resultEl = document.getElementById('result');

inputEl.addEventListener('input', counterOfWords);

resultEl.addEventListener('click', copyCounterNumber);

function counterOfWords() {
	const arr = inputEl.value.split('');

	resultEl.textContent = arr.length;
}