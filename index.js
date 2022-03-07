const arrow = document.querySelectorAll('.arrowM')
const arrowM = []
arrowM.push(...arrow)

const callBurger = (event) => {
    if (event.target === burger || event.target === closeX) {
        closeX.classList.toggle("visible");
        burger.classList.toggle("visible");
        navBar.classList.toggle("visible");
    };
};
document.addEventListener('click', callBurger);


document.addEventListener('click', (e) => {
    if (e.target === navBarOption1) {
        option1.classList.toggle('visible');
        const arrowM1 = arrowM[0];
        arrowM1.classList.toggle('rotate');
    }
});
document.addEventListener('click', (e) => {
    if (e.target === navBarOption2) {
        option2.classList.toggle('visible');
        const arrowM2 = arrowM[1];
        arrowM2.classList.toggle('rotate');
    }
});
document.addEventListener('click', (e) => {
    if (e.target === navBarOption3) {
        option3.classList.toggle('visible');
        const arrowM3 = arrowM[2];
        arrowM3.classList.toggle('rotate');
    }
});


