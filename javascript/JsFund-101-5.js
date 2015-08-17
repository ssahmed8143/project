var globalVar = "this is a global variable";

var globalFunction = function (p1) {
    var localVar = "this is a local variable";

    var localFunction = function () {
        var superLocalVar = "hello world";
        document.write(superLocalVar + "<br>");
        document.write(localVar + "<br>");
        document.write(p1 + "<br>");
        document.write(globalVar + "<br>")

    }
    document.write(localVar + "<br>");
    localFunction();
    //document.write(superLocalVar + "<br>");   //we can't access superLocal Var
}

globalFunction(2);
