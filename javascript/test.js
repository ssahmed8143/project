alert("hello party programmers");

var thisIsVar;
thisIsVar="something";
document.write(thisIsVar + "<br />");

function givePie(){
    return 3.14;
}

function multiplybyTwo(a){
    return a * 2;
}

var product = function(a, b){
    return a * b;
}

var doSomething =  function(p1, p2, fn){
    p1= p1 +1;
    return fn(p1, p2);
}

var bar = doSomething(2, 2, multiplybyTwo);
var foo= multiplybyTwo(2);

var y =  doSomething(2, 2, function (p1, p2){
    return p1+p2;
});



var x= givePie();
document.write(x + "<br />");
document.write(foo + "<br />");
document.write(product(1,2) + "<br />");
document.write(bar + "<br />");
document.write(y + "<br />");

