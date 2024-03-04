function calc() {
    var he = document.getElementById("heig").value;
    var we = document.getElementById("weight").value;
    var height = parseFloat(he);
    var weight = parseFloat(we);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid values for height and weight.");
        return;
    }
    var bmi = weight / Math.pow(height / 100, 2);
    document.getElementById("bmiva").value = bmi.toFixed(2);
}
