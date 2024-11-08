
//*box fade-out + box transition
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.box-container').classList.remove('yes-shadow');
        document.querySelector('.box-container').classList.add('no-shadow');
        document.querySelector('.box.left').classList.add('left-after');
        document.querySelector('.box.right').classList.add('right-after');
        
        document.querySelectorAll('.box .inner').forEach(inner => {
            inner.classList.add('fade-out');
        });

        setTimeout(() => {
            window.location.href = link.href;
        }, 700);
    });
});

window.addEventListener('load', function () {
    const boxShadow = document.querySelector('.box-container');

    document.querySelectorAll('.box .inner').forEach(inner => {
        inner.classList.add('fade-in');
    });
    boxShadow.classList.add('yes-shadow');
});
