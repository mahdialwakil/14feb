const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const btnGroup = document.querySelector('.btn-group'); // Select the container

// When 'Yes' is clicked
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'yeee, dm plz! See you on 14th..';
    btnGroup.style.display = 'none'; // Buttons disappear
});

// When 'No' is clicked (if they manage to catch it!)
noBtn.addEventListener('click', () => {
    question.innerHTML = 'Tui single e thakbi ajibon!';
    btnGroup.style.display = 'none'; // Buttons disappear
});

// Your existing logic to move the No button
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapper.clientWidth - noBtn.offsetWidth));
    const j = Math.floor(Math.random() * (wrapper.clientHeight - noBtn.offsetHeight));
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});