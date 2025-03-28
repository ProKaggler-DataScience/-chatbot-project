// This file contains JavaScript code for advanced animations used throughout the website.

document.addEventListener('DOMContentLoaded', function() {
    const chatInterface = document.querySelector('.chat-interface');
    const popup = document.querySelector('.popup');

    function fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = 'block';
        let last = +new Date();
        const tick = function() {
            element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
            last = +new Date();

            if (+element.style.opacity < 1) {
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    }

    function fadeOut(element) {
        element.style.opacity = 1;
        let last = +new Date();
        const tick = function() {
            element.style.opacity = +element.style.opacity - (new Date() - last) / 400;
            last = +new Date();

            if (+element.style.opacity > 0) {
                requestAnimationFrame(tick);
            } else {
                element.style.display = 'none';
            }
        };
        requestAnimationFrame(tick);
    }

    // Example of triggering animations
    if (chatInterface) {
        chatInterface.addEventListener('mouseenter', function() {
            chatInterface.classList.add('hover-animation');
        });

        chatInterface.addEventListener('mouseleave', function() {
            chatInterface.classList.remove('hover-animation');
        });
    }

    if (popup) {
        document.querySelector('.show-popup').addEventListener('click', function() {
            fadeIn(popup);
        });

        document.querySelector('.close-popup').addEventListener('click', function() {
            fadeOut(popup);
        });
    }
});