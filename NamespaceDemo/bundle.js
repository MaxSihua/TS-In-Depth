let Utility;
(function (Utility) {
    let Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllower(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllower = maxBooksAllower;
    function privateFunc() {
        console.log('This is a private function');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
let result1 = Utility.maxBooksAllower(30);
console.log(result1);
let util = Utility.Fees;
let result2 = util.calculateLateFee(10);
console.log(result2);
