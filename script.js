// Load the JSON data
let dollarData = {};

// Function to load JSON data
async function loadData() {
    try {
        const response = await fetch('./output.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        dollarData = await response.json();
        console.log('Data loaded successfully', Object.keys(dollarData).length, 'entries');
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('result').textContent = 'Error loading data. Please make sure output.json exists and the page is served from a web server.';
        document.getElementById('result').style.color = 'red';
    }
}

// Main lookup function (called by the button onclick)
function lookupSerial() {
    const serialInput = document.getElementById('serialInput');
    const resultDiv = document.getElementById('result');
    const searchValue = serialInput.value.trim();
    
    if (!searchValue) {
        resultDiv.textContent = 'Please enter a serial number.';
        resultDiv.style.color = 'orange';
        return;
    }
    
    // Look up the serial number in the data
    if (dollarData[searchValue]) {
        resultDiv.textContent = `Found: ${dollarData[searchValue]}`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Serial number not found.';
        resultDiv.style.color = 'red';
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    
    // Add Enter key support for the input field
    const serialInput = document.getElementById('serialInput');
    serialInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            lookupSerial();
        }
    });
});