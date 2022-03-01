// const navOptions = document.getElementById("navBarOption1");


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
    }
});
document.addEventListener('click', (e) => {
    if (e.target === navBarOption2) {
        option2.classList.toggle('visible');
    }
});
document.addEventListener('click', (e) => {
    if (e.target === navBarOption3) {
        option3.classList.toggle('visible');
    }
});

// option3.addEventListener('click', (e) => {
//     console.log(e)
// })

