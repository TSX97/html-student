document.addEventListener('DOMContentLoaded', function() {
    const fixedBtn = document.getElementById('fixedPresentationBtn');
    const heroBtn = document.getElementById('presentationBtn');
    const formModal = document.getElementById('formModal');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    const presentationForm = document.getElementById('presentationForm');
    
    // Открытие модального окна с формой
    function openFormModal() {
        formModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // Закрытие модального окна
    function closeFormModal() {
        formModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Закрытие модального окна успеха
    function closeSuccessModalFunc() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Обработчики открытия модального окна
    fixedBtn.addEventListener('click', openFormModal);
    heroBtn.addEventListener('click', openFormModal);
    
    // Обработчики закрытия модальных окон
    closeModal.addEventListener('click', closeFormModal);
    closeSuccessModal.addEventListener('click', closeSuccessModalFunc);
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        if (e.target === formModal) {
            closeFormModal();
        }
        if (e.target === successModal) {
            closeSuccessModalFunc();
        }
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
                // Закрываем форму и показываем успех
                closeFormModal();
                successModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                presentationForm.reset();
            } else {
                alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке формы. Проверьте подключение к интернету.');
        }
    });
});document.addEventListener('DOMContentLoaded', function() {
    const fixedBtn = document.getElementById('fixedPresentationBtn');
    const heroBtn = document.getElementById('presentationBtn');
    const formModal = document.getElementById('formModal');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    const presentationForm = document.getElementById('presentationForm');
    
    // Открытие модального окна с формой
    function openFormModal() {
        formModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // Закрытие модального окна
    function closeFormModal() {
        formModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Закрытие модального окна успеха
    function closeSuccessModalFunc() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Обработчики открытия модального окна
    fixedBtn.addEventListener('click', openFormModal);
    heroBtn.addEventListener('click', openFormModal);
    
    // Обработчики закрытия модальных окон
    closeModal.addEventListener('click', closeFormModal);
    closeSuccessModal.addEventListener('click', closeSuccessModalFunc);
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        if (e.target === formModal) {
            closeFormModal();
        }
        if (e.target === successModal) {
            closeSuccessModalFunc();
        }
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
                // Закрываем форму и показываем успех
                closeFormModal();
                successModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                presentationForm.reset();
            } else {
                alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке формы. Проверьте подключение к интернету.');
        }
    });
});
