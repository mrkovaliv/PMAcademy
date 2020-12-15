window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.menu__list-link').forEach((item) => {
        
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            document.querySelectorAll('.menu__list-link').forEach((child) => child.classList.remove('menu__list-link--active'));
            document.querySelectorAll('.content').forEach((child) => child.classList.remove('content--active'));

            item.classList.add("menu__list-link--active");
            document.getElementById(id).classList.add('content--active');
        });

    });
});