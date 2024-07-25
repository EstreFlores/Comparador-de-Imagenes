document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.comparador-container');
    const item2 = document.getElementById('item-2');
    const handle = document.querySelector('.slider-handle');

    container.addEventListener('mousemove', function(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        item2.style.width = `${x}px`;
        handle.style.left = `${x}px`;
    });

    container.addEventListener('touchmove', function(e) {
        const rect = container.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        item2.style.width = `${x}px`;
        handle.style.left = `${x}px`;
    });
});
