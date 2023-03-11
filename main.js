function calculatePercentage() {
    var number = document.getElementById("number").value;
    var percentage = document.getElementById("percentage").value;
    var result = number * (percentage / 100);
    document.getElementById("result").innerHTML = "Результат: " + result;
}