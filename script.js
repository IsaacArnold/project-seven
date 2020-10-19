/* ====================
Alert bar script
==================== */
const alert = document.getElementById('alert');

// Inserts content into DOM
alert.innerHTML = 
`<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>`

// Adds an event handler to the close button
alert.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alert.style.display = 'none';
    }
});