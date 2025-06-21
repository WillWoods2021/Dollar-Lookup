let serialData = {};

fetch('./data/dollars.json')
  .then(response => response.json())
  .then(data => serialData = data);

function lookupSerial() {
  const input = document.getElementById("serialInput").value.trim();
  const resultDiv = document.getElementById("result");
  
  if (serialData[input]) {
    resultDiv.textContent = serialData[input];
  } else {
    resultDiv.textContent = "Serial number not found.";
  }
}
