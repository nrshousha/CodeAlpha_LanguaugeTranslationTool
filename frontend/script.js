document.addEventListener('DOMContentLoaded', () => {
    const sourceLang = document.getElementById('source-lang');
    const targetLang = document.getElementById('target-lang');
    const swapBtn = document.getElementById('swap-btn');
    const inputText = document.getElementById('input-text');
    const translateBtn = document.getElementById('translate-btn');
    const charCount = document.querySelector('.character-count');

    // Handle character count
    inputText.addEventListener('input', () => {
        const count = inputText.value.length;
        charCount.textContent = `${count} / 5000`;
    });

    // Handle swap languages
    swapBtn.addEventListener('click', () => {
        const tempLang = sourceLang.value;
        sourceLang.value = targetLang.value;
        targetLang.value = tempLang;
        
        // Note: the actual translation swap will be handled when the API is integrated.
    });

    // Add button animation effect
    translateBtn.addEventListener('mousedown', () => {
        translateBtn.style.transform = 'scale(0.98)';
    });
    
    translateBtn.addEventListener('mouseup', () => {
        translateBtn.style.transform = 'translateY(-2px)';
    });
    
    translateBtn.addEventListener('mouseleave', () => {
        translateBtn.style.transform = '';
    });
});
