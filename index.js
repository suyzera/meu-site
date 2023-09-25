const closeMenuButton = document.getElementById('mobile-menu-close-button')
const openMenuButton = document.getElementById('mobile-menu-open-button')
const mobileMenu = document.getElementById('mobile-menu')

openMenuButton.addEventListener('click', () => {
  mobileMenu.style.display = "block"
})

closeMenuButton.addEventListener('click', () => {
  mobileMenu.style.display = "none";
})
