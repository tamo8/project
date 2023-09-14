let dropdown = document.querySelector('.dropdown');
let dropdownbutton = document.querySelector('#hamburger_btn');
let isOpen = false;

dropdownButton.addEventListener('click', () => 
{ if (isopen){
    dropdown.classList.remove('show');
    isOpen = false;
}
else{
    dropdown.classList.add('show');
    isOpen = true;
}
}
)
