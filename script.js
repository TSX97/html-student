document.addEventListener('DOMContentLoaded', function() {
    const presentationBtn = document.getElementById('presentationBtn');
    const presentationForm = document.getElementById('presentationForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    
    // Плавная прокрутка к форме
    presentationBtn.addEventListener('click', function() {
        document.querySelector('.form-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Обработка отправки формы
    presentationForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value
        };
        
        try {
            // Отправка данных на бэкенд
            const response = await fetch('http://localhost:8000/submit_contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                // Показываем модальное окно при успешной отправке
                successModal.style.display = 'flex';
                presentationForm.reset();
            } else {
                alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке формы. Проверьте подключение к интернету.');
        }
    });
    
    // Закрытие модального окна
    closeModal.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});
