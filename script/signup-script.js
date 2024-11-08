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

document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Add left and right transition classes to the respective boxes
        document.querySelector('.box-container').classList.remove('yes-shadow');
        document.querySelector('.box-container').classList.add('no-shadow');
        document.querySelector('.box.left').classList.add('left-after');
        document.querySelector('.box.right').classList.add('right-after');

        // Apply fade-out animation to .inner contents within each box simultaneously
        document.querySelectorAll('.box .inner').forEach(inner => {
            inner.classList.add('fade-out');
        });

        // Set timeout to match the animation duration, then redirect to the new page
        setTimeout(() => {
            window.location.href = link.href;
        }, 700); // Adjust if necessary to sync with the full animation duration
    });
});

window.addEventListener('load', function () {
    const boxShadow = document.querySelector('.box-container');

    document.querySelectorAll('.box .inner').forEach(inner => {
        inner.classList.add('fade-in');
    });
    boxShadow.classList.add('yes-shadow');
});