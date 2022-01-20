const activeLink = window.location.pathname;
const navList = document.querySelectorAll('ul li a');
navList.forEach(link => {
    if (link.href.includes(`${activeLink}`)) link.classList.add('active')
})