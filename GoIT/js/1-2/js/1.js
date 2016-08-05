function pow(x, n) {
    var result = x;

    if (n > 0) {
        for (var i = 1; i < n; i++) {
            result *= x;
        }

        return result;
    } else {
        n = n * -1;
        for (var i = 1; i < n; i++) {
            result *= x;
        }

        return 1 / result;
    }

}

var x = prompt('Введите число', '');
var n = prompt('Введите степень', '');


    console.log(pow(x, n));
