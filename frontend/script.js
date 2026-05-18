document.addEventListener('DOMContentLoaded', () => {
    const sourceLang = document.getElementById('source-lang');
    const targetLang = document.getElementById('target-lang');
    const swapBtn = document.getElementById('swap-btn');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text'); // ← don't forget this!
    const translateBtn = document.getElementById('translate-btn');
    const charCount = document.querySelector('.character-count');

    inputText.addEventListener('input', () => {
        const count = inputText.value.length;
        charCount.textContent = `${count} / 5000`;
    });

    swapBtn.addEventListener('click', () => {
        const tempLang = sourceLang.value;
        sourceLang.value = targetLang.value;
        targetLang.value = tempLang;
    });

    translateBtn.addEventListener('mousedown', () => {
        translateBtn.style.transform = 'scale(0.98)';
    });
    translateBtn.addEventListener('mouseup', () => {
        translateBtn.style.transform = 'translateY(-2px)';
    });
    translateBtn.addEventListener('mouseleave', () => {
        translateBtn.style.transform = '';
    });

    translateBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: inputText.value,
                from_lang: sourceLang.value,
                to_lang: targetLang.value
            })
        });
        const data = await response.json();
        outputText.value = data.translated_text;
    });

});