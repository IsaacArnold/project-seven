/* ====================
Alert bar script
==================== */
const alertBar = document.getElementById('alert');

// Inserts content into DOM
alertBar.innerHTML = 
`<div class="alert-banner">
    <div class="alert-banner-content">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
</div>`

// Adds an event handler to the close button
alertBar.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBar.style.display = 'none';
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
        backgroundColor: '#7477bf',
        pointBackgroundColor: 'white',
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

// Creates outline for the bar graph
const dailyCanvas = document.getElementById('daily-chart');
let dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477bf',
        borderWidth: 1,
    }]
};
// Lets you set the chart options
let dailyOptions = {
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
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData, 
    options: dailyOptions
});

// Creates outline for the pie chart
const mobileCanvas = document.getElementById('pie-chart');
let mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        backgroundColor: [
            '#7477bf',
            '#78CF82',
            '#51b6c8'
        ],
        borderWidth: 0,
    }]
};
// Lets you set the chart options
let mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};
// Creates the chart itself
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData, 
    options: mobileOptions
});

/* ========================================
Messaging widget
======================================== */

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

// Adds a click handler for the send button
send.addEventListener('click', (event) => {
    event.preventDefault();
    if (user.value === "" && message.value === "") {
        alert("Please fill in the user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out the user field before sending");
    } else if (message.value === "") {
        alert("Please fill out the message field before sending");
    } else {
        alert(`Your message has been successfully sent to: ${user.value}`);
    }
});

/* ========================================
Local Storage for Settings widget
======================================== */
const email = document.getElementById('email');
const profile = document.getElementById('profile');
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');

function testStorage() {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

if (testStorage() === true) {}

// Saves settings to local storage when save button is clicked
saveButton.addEventListener('click', () => {
    localStorage.setItem('emailPref', email.checked);
    localStorage.setItem('profilePref', profile.checked);
    alert('Settings successfully saved!');
});

// Sets all settings back to deafult when cancel is pushed
cancelButton.addEventListener('click', () => {
    const cancel = confirm('Are you sure you want to cancel changes?');

    if (cancel) {
        localStorage.setItem('emailPref', email.checked = null);
        localStorage.setItem('profilePref', profile.checked = null);
    }
});

// Runs function to load correct settings
loadSettings();

// Sets value of ID based on saved profile settings
const loadSettings = function() {
    if (emailPref !== null) {
        email.checked = (emailPref === 'true');
    }
    if (profilePref !== null) {
        profile.checked = (emailPref === 'true');
    }
}

/* ========================================
Local Storage for Settings widget
======================================== */