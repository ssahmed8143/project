

var doSomething = function (param1, param2, fn){
    param1 = param1 + 3;
    param1 = param1 + 1;
    param1 = param1 * 8;

    return fn(param1, param2);
}

function sum(p1, p2){
    return p1 + p2;
}

var foo = doSomething(2, 2, sum); //96
var bar = doSomething(3, 2, function(p1, p2){
    return p1 * p2;
});


document.write(foo + "<br>");
document.write(bar + "<br>");