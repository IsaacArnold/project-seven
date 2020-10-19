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

/* ====================
Chart widgets
==================== */

// Creates outline for the line graph
const trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: ['16-32', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: '#ff6384',
        pointBackgroundColor: '#cd833',
        borderWidth: 1,
    }]
};
// Lets you set the chart options
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};
// Creates the chart itself
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData, 
    options: trafficOptions
});