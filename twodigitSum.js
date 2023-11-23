function twoDigitSum(number) {
    var sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

var result = twoDigitSum(45);
console.log("ორნიშნა რიცხვის ციფრთა ჯამია:", result);
