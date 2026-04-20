window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const cpfInput = document.querySelector('.hero-card input');

cpfInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    
    // Aplica a máscara progressivamente
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    e.target.value = value.substring(0, 14);
});