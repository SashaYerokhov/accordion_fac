const accordionHeader = [...document.querySelectorAll('.card__accordion-header')];


accordionHeader.forEach((accordion) => {

    const icon = accordion.firstElementChild;

    accordion.addEventListener('click', collapseAccordions);

    function collapseAccordions() {
        const openAccordion = document.querySelector('.open');
        if (openAccordion && openAccordion !== accordion) {
            openAccordion.classList.toggle('open');
            openAccordion.nextElementSibling.style.maxHeight = 0;

        }

        accordion.classList.toggle('open');
        const accordionBody = accordion.nextElementSibling;

        if (accordion.classList.contains('open')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            icon.classList.add('active');
        } else {
            accordionBody.style.maxHeight = 0;
            icon.classList.remove('active')
        }
    }
})