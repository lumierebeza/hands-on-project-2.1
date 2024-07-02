// Function to convert miles to kilometers
function convertMilesToKilometers() {
    var miles = document.getElementById('mileInput').value;
    if (miles) {
        var kilometers = miles * 1.60934;
        document.getElementById('result').innerText = miles + ' miles is equal to ' + kilometers.toFixed(2) + ' kilometers.';
    } else {
        alert('Please enter a value for miles.');
    }
}

// Event listener for the button click
document.getElementById('convertButton').onclick = convertMilesToKilometers;
