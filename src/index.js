module.exports = function toReadable(number) {
    var words = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    // Function select number from set array
    const numberArr = (num) => words[num];
    // Function format digital in string out
    function textDigital(n) {
        const arr = n.toString().split("");
        const length = arr.length;
        // For 0 - 20 and 30,40,50,60,70,80,90
        if (number <= 20 || (number % 10 === 0 && length === 2)) {
            return numberArr(number);
        }
        if (number > 20 && number < 100) {
            return numberArr(arr[0] + 0) + " " + numberArr(arr[length - 1]);
        }
        // for 20 - 100
        if (length === 3) {
            let hun = arr.shift();
            let result = numberArr(hun) + " hundred ";
            if (arr[0] === "0" && arr[1] === "0") {
                return result.trim();
            }
            if (arr[0] === "0") {
                arr.shift();
            }
            let num = Number(arr.join(""));
            if (num <= 20 || (num > 20 && num < 100 && num % 10 === 0)) {
                return (result += numberArr(num));
            } else if (num > 20 && num < 100) {
                return (result +=
                    numberArr(arr[0] + 0) + " " + numberArr(arr[1]));
            }
        }
    }
    return textDigital(number);
};
