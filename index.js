let dropdown = document.querySelector('.dropdown');
let dropdownButton = document.querySelector('#hamburger_btn');
let isOpen = false;

dropdownButton.addEventListener('click', () => {
dropdown.classList.toggle('show');
}
)
