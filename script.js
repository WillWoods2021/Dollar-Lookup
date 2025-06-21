let dollarData = {};

// Function to load JSON data
async function loadData() {
    try {
        const response = await fetch('output.json');
        dollarData = await response.json();
        console.log('Data loaded successfully');
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Search function
function searchSerial() {
    const serialInput = document.getElementById('serialInput');
    const resultDiv = document.getElementById('result');
    const searchValue = serialInput.value.trim();
    
    if (!searchValue) {
        resultDiv.textContent = 'Please enter a serial number.';
        resultDiv.style.color = 'red';
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

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    
    const searchButton = document.getElementById('searchButton');
    const serialInput = document.getElementById('serialInput');
    
    searchButton.addEventListener('click', searchSerial);
    
    // Allow Enter key to trigger search
    serialInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchSerial();
        }
    });
});