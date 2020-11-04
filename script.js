/* ========================================
Alert bar script
======================================== */
const alertBar = document.getElementById('alert');

// Inserts content into DOM
alertBar.innerHTML = 
`<div class="alert-banner">
    <div class="alert-banner-content">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
</div>`;

// Adds an event handler to the close button
alertBar.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')) {
        alertBar.style.display = 'none';
    }
});

/* ========================================
Bell icon notifications
======================================== */

// Adds an event handler to the notification list
const notificationUl = document.getElementById('notification-ul');
const notificationItem = document.getElementsByClassName('close');
const notificationIcon = document.getElementById('notification-icon');

for (let i = 0; i < notificationItem.length; i++) {
    notificationItem[i].addEventListener('click', (e) => {
        if (e.target.tagName === 'P') {
            e.target.parentNode.remove();
            // Removes green notification dot
            if (notificationUl.children.length < 1) {
                notificationIcon.style.display = 'none';
            }
        }
    });
}

// Function for hiding notifications on page load
function hideNotifications() {
    notificationUl.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', hideNotifications());

// Loads notifications once bell icon is clicked
const bellIcon = document.querySelector('.icon-bell');

bellIcon.addEventListener('click', () => {
    if (notificationUl.style.display = 'none') {
        notificationUl.style.display = 'block';
    }
});


/* ========================================
Chart widgets
======================================== */

// Creates outline for the line graph - WEEKLY
const trafficCanvas = document.getElementById('traffic-chart');
let trafficDataWeekly = {
    labels: ['16-32', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: '#7477bf',
        pointBackgroundColor: 'white',
        borderWidth: 1,
    }]
};

// Creates the DAILY chart
let trafficDataDaily = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        data: [10, 40, 55, 30, 50, 20, 45, 50, 15],
        backgroundColor: '#7477bf',
        pointBackgroundColor: 'white',
        borderWidth: 1,
    }]
};

// Creates the HOURLY chart
let trafficDataHourly = {
    labels: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    datasets: [{
        data: [100, 450, 250, 200, 600, 150, 500, 300, 250, 550, 700, 400],
        backgroundColor: '#7477bf',
        pointBackgroundColor: 'white',
        borderWidth: 1,
    }]
};

// Creates the MONTHLY chart
let trafficDataMonthly = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        data: [50, 30, 35, 65, 80, 40, 70, 30, 25, 55, 70, 40, 50, 90],
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
function createChart(data) {
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: data, 
        options: trafficOptions
    });
}


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
const select = document.getElementById('timezone');
// Select idea taken from question by user3143218 on stackoverflow
let selectOption = select.options[select.selectedIndex];
let lastSelected;
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



// Create const for saved values
const emailPref = localStorage.getItem('emailPref');
const profilePref = localStorage.getItem('profilePref');
const timezonePref = localStorage.getItem('select', lastSelected);

// Sets value of ID based on saved profile settings
const loadSettings = function() {
    if (emailPref !== 'false') {
        email.checked = (emailPref === 'true');
    }
    if (profilePref !== 'false') {
        profile.checked = (emailPref === 'true');
    }
    if (timezonePref !== 'false') {
        select.value = localStorage.getItem('timezonePref'); 
        // getItem() idea from rohald89_FEWD-TD-unit07
    }
};

if (testStorage() === true) {

// Saves settings to local storage when save button is clicked
saveButton.addEventListener('click', () => {
    localStorage.setItem('emailPref', email.checked);
    localStorage.setItem('profilePref', profile.checked);
    lastSelected = select.options[select.selectedIndex].value;
    localStorage.setItem('timezonePref', lastSelected);
    alert('Settings successfully saved!');
});

// Sets all settings back to deafult when cancel is pushed
cancelButton.addEventListener('click', () => {
    const cancel = confirm('Are you sure you want to cancel changes?');

    if (cancel) {
        localStorage.setItem('emailPref', email.checked = false);
        localStorage.setItem('profilePref', profile.checked = false);
        localStorage.setItem('timezonePref', select.selectedIndex = select.options[0].value);
    }
});

// Runs function to load correct settings
loadSettings();
}

document.addEventListener('DOMContentLoaded', loadSettings());


/* ========================================
Chart changes
======================================== */

const trafficUl = document.getElementById('traffic-ul');
const hourlyLi = document.getElementById('hourly');
const dailyLi = document.getElementById('daily');
const weeklyLi = document.getElementById('weekly');
const monthlyLi = document.getElementById('monthly');
const trafficChildren = trafficUl.children;

// Adds event listener to traffic nav and changes chart accordingly
trafficUl.addEventListener('click', (e) => {
    // Creates a function to toggle display chart and 'active' class name depending on li element clicked
    function toggleChart(listName, chartName) {
        if (e.target == listName) {
            createChart(chartName);
            listName.classList.add('active');
        } else if (e.target !== listName) {
            listName.classList.remove('active');
        }
    }
    // Hourly chart
    toggleChart(hourlyLi, trafficDataHourly);
    // Daily chart
    toggleChart(dailyLi, trafficDataDaily);
    // Weekly chart
    toggleChart(weeklyLi, trafficDataWeekly);
    // Monthly chart
    toggleChart(monthlyLi, trafficDataMonthly);
});

// Loads the weekly chart on page load
document.addEventListener('DOMContentLoaded', () => {
    createChart(trafficDataWeekly);
    weeklyLi.classList.add('active');
});

/* ========================================
Autocomplete function --> Code from YouTube tutorial by FrontendTips 'Autocomplete suggestion box'
======================================== */
// Creates an array of objects for the user names
const userNames = [
    {name: 'Victoria Chambers'},
    {name: 'Dale Byrd'},
    {name: 'Dawn Wood'},
    {name: 'Dan Oliver'}
];

// Gets reference to the search input
const searchInput = document.getElementById('userField');
const suggestionsPanel = document.querySelector('.suggestions');

// Adds event listener to keyboard when user searches
searchInput.addEventListener('keyup', () => {
    // Stores the value of input into a variable
    const input = searchInput.value.toLowerCase();
    suggestionsPanel.innerHTML = '';
    // Filters through the array objects and returns the array if the search begins with the userName
    const suggestions = userNames.filter(function(names) {
        return names.name.toLowerCase().includes(input); 
    });
    // Appends the divs into the suggestions container
    suggestions.forEach(function(suggested) {
        const div = document.createElement('div');
        div.innerHTML = suggested.name;
        suggestionsPanel.appendChild(div);
    });
    // Clears the input if the search field is empty
    if (input === '') {
        suggestionsPanel.innerHTML = ''; 
    }
});

// Listens to the clicks on the suggestions div and places the clicked name in the search field
suggestionsPanel.addEventListener('click', (e) => {
    const element = e.target.textContent;
    searchInput.value = element;
    // Clears the suggestions div panel if an element is clicked
    if (searchInput.value === element) {
        suggestionsPanel.style.display = 'none';
    }
});