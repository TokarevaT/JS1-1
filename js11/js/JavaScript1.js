function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
var x = prompt("Введите число", "");
console.log('x', x);
var n = prompt("Введите степень", "");
console.log('n', n)

if (n <= 1) {
    alert('Степень ' + n +
      'не поддерживается, введите целую степень, большую 1'
    );
} else {
    alert(pow(x, n));
    console.log('(pow(x, n))', (pow(x, n)));
}
//var x = +prompt("Введите первое число", "");
//console.log('x',x);
//var n = +prompt("Введите второе число", "");
//console.log('n', n);

//alert(x + n);
//console.log('x + n', x + n);