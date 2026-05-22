document.addEventListener("DOMContentLoaded", function() {
    // Ждем секунду, чтобы Swiper точно успел инициализироваться в DOM
    setTimeout(() => {
        if (typeof Swiper !== 'undefined') {
            const swiper = new Swiper(".mySwiper", {
                loop: true,               // Зацикливать прокрутку
                spaceBetween: 10,         // Расстояние между слайдами
                slicePerView: 1,          // Показывать по 1 слайду
                autoplay: {
                    delay: 4000,          // Автопрокрутка каждые 4 секунды
                    disableOnInteraction: false, // Не выключать автопрокрутку при кликах
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,      // Точки пагинации кликабельны
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
    }, 300);
});