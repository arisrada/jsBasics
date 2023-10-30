function myFunc() {
    var a = 100;
    try {
        var s = a.toUpperCase();
        alert("value of a variable is:" + a);
    } catch (e) {
        alert("Error");
    }    
    finally{
        alert("Finally block will always execute!");
    }
}