document.addEventListener("DOMContentLoaded", function() {
    
    // Универсальная функция загрузки HTML-компонентов
    function loadComponent(selector, url, callback) {
        const element = document.querySelector(selector);
        if (!element) return;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Ошибка загрузки: ${url}`);
                return response.text();
            })
            .then(data => {
                element.innerHTML = data;
                if (callback) callback(); // Вызываем колбэк после успешной вставки HTML
            })
            .catch(error => console.error(error));
    }

    // Функция для подсветки активной страницы в меню
    function highlightActiveMenu() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.main-nav a, .dropdown-menu a');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            
            // Если путь совпадает, добавляем класс active
            if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html')) {
                link.classList.add('active');
                
                // Если это пункт внутри выпадающего списка, подсвечиваем и родительскую ссылку "Услуги"
                const dropdownParent = link.closest('.dropdown');
                if (dropdownParent) {
                    dropdownParent.querySelector('a').classList.add('active');
                }
            }
        });
    }

    // Инициализация загрузки компонентов
    loadComponent('header.site-header', '/components/header.html', highlightActiveMenu);
    loadComponent('footer.site-footer', '/components/footer.html');
});