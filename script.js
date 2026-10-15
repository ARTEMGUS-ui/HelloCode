if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

const progress = localStorage.getItem('userProgress') || '0';
document.querySelector('.episode').textContent = `${progress}/3`;

const startBtn = document.getElementById('1-cs');
if (progress === '3') {
    startBtn.textContent = "Пройти заново";
    localStorage.setItem('currentLesson', '1');
    startBtn.addEventListener('click', () => {
        localStorage.setItem('userProgress', '0');
        window.location.href = 'lesson.html';
    });
} else {
    if (parseInt(progress) > 0) {
        startBtn.textContent = "Продолжить";
    }
    startBtn.addEventListener('click', () => {
        window.location.href = 'lesson.html';
    });
}