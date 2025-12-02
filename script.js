const links = document.querySelectorAll('.menu a');
const currentPage = location.pathname.split('/').pop();

links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
