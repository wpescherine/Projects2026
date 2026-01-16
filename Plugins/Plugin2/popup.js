let numberOfPunchs = 0;

handleGetLocalStorage();

function handleTimePunch() {
    const now = new Date().toLocaleTimeString();
    
    if(numberOfPunchs === 0) {
        document.getElementById('clock-in').textContent = `Clock-In: ${now}`;
    } else if(numberOfPunchs === 1) {
        document.getElementById('lunch-out').textContent = `Lunch-Out: ${now}`;
    } else if(numberOfPunchs === 2) {
        document.getElementById('lunch-in').textContent = `Lunch-In: ${now}`;
    } else if(numberOfPunchs === 3) {
        document.getElementById('clock-out').textContent = `Clock-Out: ${now}`;
    }
        numberOfPunchs = (numberOfPunchs + 1);
        handleSetLocalStorage();
    };

function handleSetLocalStorage() {
    localStorage.setItem('numberOfPunchs', numberOfPunchs);
    localStorage.setItem('clockInTime', document.getElementById('clock-in').textContent);
    localStorage.setItem('lunchOutTime', document.getElementById('lunch-out').textContent);
    localStorage.setItem('lunchInTime', document.getElementById('lunch-in').textContent);
    localStorage.setItem('clockOutTime', document.getElementById('clock-out').textContent); 
}

function handleGetLocalStorage() {
    numberOfPunchs = parseInt(localStorage.getItem('numberOfPunchs')) || 0;
    document.getElementById('clock-in').textContent = localStorage.getItem('clockInTime') || 'Clock-In: ';
    document.getElementById('lunch-out').textContent = localStorage.getItem('lunchOutTime') || 'Lunch-Out: ';
    document.getElementById('lunch-in').textContent = localStorage.getItem('lunchInTime') || 'Lunch-In: ';
    document.getElementById('clock-out').textContent = localStorage.getItem('clockOutTime') || 'Clock-Out: ';
}

function handleReset() {
    numberOfPunchs = 0;
    document.getElementById('clock-in').textContent = 'Clock-In: ';
    document.getElementById('lunch-out').textContent = 'Lunch-Out: ';
    document.getElementById('lunch-in').textContent = 'Lunch-In: ';
    document.getElementById('clock-out').textContent = 'Clock-Out: ';
    handleSetLocalStorage();
}

document.addEventListener('DOMContentLoaded', function() {
    const clockButton = document.querySelector('#clock-in-btn');
    // onClick's logic below:
    clockButton.addEventListener('click', function(){
        handleTimePunch();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.querySelector('#reset-btn');
    // onClick's logic below:
    resetButton.addEventListener('click', function(){
        handleReset();
    });
});