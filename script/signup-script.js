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

function handleTransition(link) {
    const leftInner = document.querySelector('.left .inner');
    const rightInner = document.querySelector('.right .inner');

    leftInner.classList.add('fade-out');
    rightInner.classList.add('fade-out');

    const boxShadow = document.querySelector('.box-container');
    const leftSide = document.querySelector('.left');
    const rightSide = document.querySelector('.right');

    boxShadow.classList.add('no-shadow');
    leftSide.classList.add('left-after');
    rightSide.classList.add('right-after');

    const onAnimationEnd = () => {

        leftInner.classList.remove('fade-out');
        rightInner.classList.remove('fade-out');

        document.querySelector('.box.left').style.order = '2';
        document.querySelector('.box.right').style.order = '1';

        leftInner.removeEventListener('animationend', onAnimationEnd);

        setTimeout(() => {
            leftSide.classList.remove('left-after');
            rightSide.classList.remove('right-after');
            boxShadow.classList.remove('no-shadow');
        }, 300);
    };

    leftInner.addEventListener('animationend', onAnimationEnd);
}

const links = document.querySelectorAll('.links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        handleTransition(link);

        setTimeout(() => {
            window.location.href = link.getAttribute('href');
        }, 600);
    });
});