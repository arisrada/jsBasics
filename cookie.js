function WriteCookie() {
    if (document.myForm.customer.value == '') {
        alert("Enter some value");
        return;
    }    
    // console.log(document.myForm.customer.value);
    var cookievalue = encodeURIComponent(document.myForm.customer.value + ";");
    document.cookie = "name = " + cookievalue ;
    document.write("setting cookies: " + "name = " + cookievalue );
}