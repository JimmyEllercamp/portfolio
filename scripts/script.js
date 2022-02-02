const dropMenu = document.querySelector('.fa-chevron-circle-down');
const hiddenMenu = document.querySelector('.hiddenMenu');
dropMenu.isClicked = false;
console.log(dropMenu);






const menuClick = () => {
    // if (hiddenMenu.style.opacity = '0') {
        if (!dropMenu.isClicked){
        hiddenMenu.style.opacity = '1';
        dropMenu.style.transform = 'rotate(-180deg)';
        dropMenu.style.color = 'rgb(113, 188, 214)';
        dropMenu.isClicked = true;
    } else {
        hiddenMenu.style.opacity = '0';
        dropMenu.style.transform = 'rotate(0deg)';
        dropMenu.style.color = 'rgb(205, 179, 152)';
        dropMenu.isClicked = false;
    }
}


dropMenu.addEventListener('click', menuClick);

