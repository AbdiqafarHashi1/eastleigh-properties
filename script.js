const toggle = document.querySelector('.menu-toggle');
const drawer = document.getElementById('mobileDrawer');

toggle?.addEventListener('click', () => {
  drawer.classList.toggle('open');
});
