const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach(element => {
    element.addEventListener('click', (e) => {
        const acordeon = element.parentElement;
        const isOpen = acordeon.classList.contains('open');

        if (isOpen) {
            acordeon.classList.remove('open');
        } else {
            acordeon.classList.add('open');
        }
    })
});