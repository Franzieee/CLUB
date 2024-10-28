const signUpLink = document.querySelector('.links a');

signUpLink.addEventListener('click', function(event){
    event.preventDefault();

    const boxShadow = document.querySelector('.box-container');
    const leftSide = document.querySelector('.left');
    const rightSide = document.querySelector('.right');

    boxShadow.classList.add('no-shadow')
    leftSide.classList.add('left-after');
    rightSide.classList.add('right-after');

    setTimeout(() => {
        window.location.href = 'signup.php';
    }, 700);

    setTimeout(() =>{
        boxShadow.classList.remove('no-shadow')
    }, 1400);
});