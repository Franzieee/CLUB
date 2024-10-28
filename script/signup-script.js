document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function () {
        const dropdownList = this.nextElementSibling;
        const isVisible = dropdownList.style.display === 'block';

        document.querySelectorAll('.dropdown-list').forEach(list => {
            list.style.display = 'none'; 
        });

        dropdownList.style.display = isVisible ? 'none' : 'block'; 
    });
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
        const header = this.closest('.custom-dropdown').querySelector('.dropdown-header .select-text');
        header.innerText = this.innerText;
        const value = this.dataset.value;
        const hiddenInput = this.closest('.custom-dropdown').querySelector('input[type="hidden"]');
        hiddenInput.value = value;

        const dropdownList = this.closest('.dropdown-list');
        dropdownList.style.display = 'none';
    });
});

document.addEventListener('click', function (event) {
    const isDropdown = event.target.closest('.custom-dropdown');
    if (!isDropdown) {
        document.querySelectorAll('.dropdown-list').forEach(list => {
            list.style.display = 'none';
        });
    }
});

const sectionDropdownList = document.getElementById('section-dropdown-list');
sectionDropdownList.style.maxHeight = '150px';
sectionDropdownList.style.overflowY = 'auto';

const loginLink = document.querySelector('.links a');

loginLink.addEventListener('click', function(event){
    event.preventDefault();

    const boxShadow = document.querySelector('.box-container');
    const leftSide = document.querySelector('.left');
    const rightSide = document.querySelector('.right');

    boxShadow.classList.add('no-shadow')
    leftSide.classList.add('left-after');
    rightSide.classList.add('right-after');

    setTimeout(() =>{
            window.location.href = 'login.php';
    }, 700);

    setTimeout(() =>{
        boxShadow.classList.remove('no-shadow')
    }, 1400);
});