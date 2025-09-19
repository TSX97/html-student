document.addEventListener('DOMContentLoaded', function() {
    const fixedBtn = document.getElementById('fixedPresentationBtn');
    const heroBtn = document.getElementById('presentationBtn');
    const formModal = document.getElementById('formModal');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    const presentationForm = document.getElementById('presentationForm');
    
    let isSubmitting = false;

    function openFormModal() {
        formModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    function closeFormModal() {
        formModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function closeSuccessModalFunc() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (fixedBtn) fixedBtn.addEventListener('click', openFormModal);
    if (heroBtn) heroBtn.addEventListener('click', openFormModal);
    
    if (closeModal) closeModal.addEventListener('click', closeFormModal);
    if (closeSuccessModal) closeSuccessModal.addEventListener('click', closeSuccessModalFunc);
    
    window.addEventListener('click', function(e) {
        if (e.target === formModal) closeFormModal();
        if (e.target === successModal) closeSuccessModalFunc();
    });
    
    if (presentationForm) {
        presentationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (isSubmitting) return;
            isSubmitting = true;
            
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value
            };
            
            try {
                const response = await fetch('http://localhost:8000/submit_contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    closeFormModal();
                    if (successModal) successModal.style.display = 'flex';
                    presentationForm.reset();
                } else {
                    alert('Ошибка при отправке формы.');
                }
            } catch (error) {
                alert('Проверьте подключение к интернету.');
            } finally {
                isSubmitting = false;
            }
        });
    }
});
