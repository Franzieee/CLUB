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