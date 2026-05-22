document.addEventListener('DOMContentLoaded', function() {
    
    // Обертка в setTimeout дает время скрипту include.js 
    // подгрузить и вставить HTML-код формы на страницу
    setTimeout(() => {
        
        // Проверьте, какой именно ID у вашей формы в HTML: 'tg-wa-form' или 'quote-form'
        // Скрипт ниже попытается найти оба варианта, чтобы точно не промахнуться
        const form = document.getElementById('tg-wa-form') || document.getElementById('quote-form');

        if (form) {
            form.addEventListener('submit', function(event) {
                // Предотвращаем стандартную отправку формы (перезагрузку страницы)
                event.preventDefault();

                // Получаем значения полей формы (с защитой от ошибок, если какого-то поля нет)
                const nameEl = document.getElementById('username') || document.getElementById('client-name');
                const phoneEl = document.getElementById('userphone') || document.getElementById('client-phone');
                const objectEl = document.getElementById('object-type') || document.getElementById('client-service');

                const name = nameEl ? nameEl.value.trim() : 'Не указано';
                const phone = phoneEl ? phoneEl.value.trim() : 'Не указано';
                const objectType = objectEl ? (objectEl.options ? objectEl.options[objectEl.selectedIndex].text : objectEl.value) : 'Общее обслуживание';

                // Номер телефона менеджера (в международном формате без +)
                const managerPhone = "77714376474"; 

                // Формируем красивое текстовое сообщение для WhatsApp
                const messageText = 
`Здравствуйте, SMART TECHNOLOGY!
Поступила новая заявка с сайта.

👤 Имя / Организация: ${name}
📞 Телефон: ${phone}
🏢 Направление / Объект: ${objectType}

Пожалуйста, свяжитесь со мной для расчета стоимости обслуживания.`;

                // Кодируем текст, чтобы его понял браузер в составе URL
                const encodedText = encodeURIComponent(messageText);

                // Формируем финальную ссылку для открытия WhatsApp
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${managerPhone}&text=${encodedText}`;

                // Открываем WhatsApp в новой вкладке
                window.open(whatsappUrl, '_blank');
            });
            
            console.log("Логика формы WhatsApp успешно инициализирована.");
        } else {
            console.warn("Форма заявки на этой странице не найдена.");
        }
        
    }, 800); // 400 миллисекунд достаточно для вставки HTML-компонентов
});