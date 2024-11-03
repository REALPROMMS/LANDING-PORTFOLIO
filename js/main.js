const buttonEl = document.getElementById('button');
const closeEl = document.querySelector('.modal-form__close');
const bgCloseEl = document.querySelector('.bg-modal');
const consultationEl = document.getElementById('consultation');
const formEl = document.getElementById('form');

function toggleModal() {
	formEl.classList.toggle('hidden');
}

buttonEl.addEventListener('click', toggleModal);
closeEl.addEventListener('click', toggleModal);
bgCloseEl.addEventListener('click', toggleModal);
consultationEl.addEventListener('click', toggleModal);
