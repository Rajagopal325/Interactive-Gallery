document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.item');
    const title = document.querySelector('.title');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            title.classList.add('dimmed');
            gallery.classList.add('hovered');

            items.forEach(otherItem => {
                if (otherItem === item) {
                    otherItem.style.zIndex = '100';
                    otherItem.querySelector('img').style.opacity = '1';
                } else {
                    otherItem.style.zIndex = '1';
                    otherItem.querySelector('img').style.opacity = '0';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            title.classList.remove('dimmed');
            gallery.classList.remove('hovered');

            items.forEach(otherItem => {
                otherItem.style.zIndex = '1';
                otherItem.querySelector('img').style.opacity = '1';
            });
        });
    });
});
