var arr = new Array("rose1.jpg", "rose3.jpg", "rose4.jpeg", "rose5.jpg");
var i = 1;
var ref;

function picLibrary() {
    document.images[0].src = arr[i];
    i++;

    if (i > 3){
        i = 0;
    }    
}

function start() {
    ref = setInterval("picLibrary()", 100);
}

function stop() {
    clearInterval(ref);
}