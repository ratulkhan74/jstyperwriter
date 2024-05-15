function textTypingEffect(text, className) {
    const typing = document.querySelector(className);
    let charIndex = 0;
    let arrIndex = 0;

    const eraseText = () => {
        if (charIndex > 0) {
            typing.textContent = text[arrIndex].slice(0, charIndex - 1);
            charIndex--;
            setTimeout(() => eraseText(text), 80);
        } else {
            arrIndex++;
            if (arrIndex > text.length - 1) {
                arrIndex = 0;
            }
            setTimeout(() => typeEffect(text), 1000);
        }
    }

    const typeEffect = () => {
        if (charIndex <= text[arrIndex].length - 1) {
            typing.textContent += text[arrIndex].charAt(charIndex);
            charIndex++;
            setTimeout(() => typeEffect(text), 120);
        } else {
            setTimeout(() => eraseText(text), 1000);
        }
    }
    typeEffect();
}

document.addEventListener('DOMContentLoaded', function () {
    textTypingEffect(['Researcher', 'Designer'], '.typing');
});
