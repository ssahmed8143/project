/**
 * Created by Sulthan on 19/05/15.
 */

//document.write("hello " + "<br />");
console.log("test");
var ThisIsV; //undefined CameCase
ThisIsV= "something";
alert(ThisIsV);
var x=10;
var isBool= false;
var foo = parseInt("34s57", 10) //34

function givePie(){
    return 3.14;
}

function multiplyByTwo(a){
    return a*2;
}

var product = function (a, b){
    return a * b;
}


var doSomething = function(p1,p2, fn){
    p1= p1 + 1;
    return fn(p1, p2);
}


function sum(p1, p2){
    return p1 + p2;
}

var foo = doSomething(2, 2, sum);

var bar = doSomething(2, 2, function (p1, p2) {
    return p1 + p2;
});



document.write(givePie() + "<br />");
document.write(multiplyByTwo(2) + "<br />");
document.write(product(1, 3) + "<br />");
document.write(foo + "<br />");
document.write(bar + "<br />");

