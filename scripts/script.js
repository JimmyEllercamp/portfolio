
// Selecting the menu item elements

const dropMenu = document.querySelector('.fa-chevron-circle-down');
const hiddenMenu = document.querySelector('.hiddenMenu');

// adding a property to the dropMenu to toggle whether the menu is opened or not

dropMenu.isClicked = false;

// Click event handler for the dropdown menu

const menuClick = () => {
    // Conditional statement checking if the icon has been clicked or not, and rendering the menu accordingly
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


// Adding the click event to the item

dropMenu.addEventListener('click', menuClick);

