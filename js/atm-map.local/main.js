function name (a, b) {
    return a + b;
};

var myFunction = function(a ,b, callback) {
    return a + b;
}

console.log(myFunction(1 ,2, function() {
    console.log("im anonymous");
}));