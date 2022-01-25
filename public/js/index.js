const nav = document.querySelector('.navigation-bar');
const landingPageServices = document.querySelector('.main-container-1');


const activeLink = window.location.pathname;
const navList = document.querySelectorAll('ul li a');
navList.forEach(link => {
    if (link.href.includes(`${activeLink}`)) link.classList.add('active')
});
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entries) {
    const [entry] = entries;
    console.log(entries);
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(
    stickyNav, {
        root: null,
        threshold: 0.2,
        //rootMargin: `-${navHeight}px`
    }
)
headerObserver.observe(landingPageServices);

//IMAGE VISIBLE ON SCROLL USING INTERSECTION oBSERVER
const main_container = document.querySelectorAll('.main-container-1');
const images = document.querySelectorAll('.cover-image-1');
console.log(main_container);
const imageVisibility = function(entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    else {
        entry.target.classList.remove("hide-section");
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
    }
}
const imageVisible = new IntersectionObserver(
    imageVisibility, {
        root: null,
        threshold: 0.5,
    }
);
images.forEach(image => {
    imageVisible.observe(image);
    image.classList.add("hide-section");
})