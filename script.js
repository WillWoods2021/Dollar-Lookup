let serialData = {};

fetch('./data/dollars.json')
  .then(response => response.json())
  .then(data => serialData = data);

function lookupSerial() {
  const input = document.getElementById("serialInput").value.trim();
  const resultDiv = document.getElementById("result");
  const serial = input.trim().padStart(8, '0');

  if (serial.length !== 8) {
    resultDiv.textContent = "Invalid serial number. Please enter an 8-digit number.";
    return;
  }
  
  if (serialData[input]) {
    resultDiv.textContent = serialData[input];
  } else {
    resultDiv.textContent = "Serial number not found.";
  }
}
