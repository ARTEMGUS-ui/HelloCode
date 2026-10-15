const body = document.body;
const btnDark = document.getElementById('theme-dark');
const btnLight = document.getElementById('theme-light');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

btnDark.addEventListener('click', () => {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
});

btnLight.addEventListener('click', () => {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
});

const modal = document.getElementById('confirm-modal');
const modalMessage = document.getElementById('modal-message');
const confirmBtn = document.getElementById('modal-confirm-btn');
const cancelBtn = document.getElementById('modal-cancel-btn');

let activeAction = null;

function showModal(message, action) {
    modalMessage.textContent = message;
    activeAction = action;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    activeAction = null;
}

document.getElementById('open-progress-modal').addEventListener('click', () => {
    showModal('Вы уверены, что хотите полностью стереть текущий прогресс?', () => {
        localStorage.setItem('userProgress', '0');
        localStorage.setItem('currentLesson', '1');
    });
});

cancelBtn.addEventListener('click', closeModal);

confirmBtn.addEventListener('click', () => {
    if (activeAction) activeAction();
    closeModal();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});