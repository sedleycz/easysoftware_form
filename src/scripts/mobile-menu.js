// Open mobile menu
function openMenu() {
    document.getElementById('mobile-menu').classList.add('open');
}
document.querySelector('button.menu-btn').addEventListener('click', openMenu);

// Close mobile menu
function closeMenu() {
    document.getElementById('mobile-menu').classList.remove('open');
}
document.querySelector('button.close-menu-btn').addEventListener('click', closeMenu);

// Close menu on item click
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});