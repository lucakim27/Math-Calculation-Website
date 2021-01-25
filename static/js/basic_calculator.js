function d(val) {
    if(val=="sin") {
       var x = document.getElementById("display").value;
       document.getElementById("display").value=Math.sin(x * Math.PI);
    }
    if(val=="cos") {
       var x = document.getElementById("display").value;
       document.getElementById("display").value=Math.cos(x * Math.PI);
    }
    if(val=="tan") {
       var x = document.getElementById("display").value;
       document.getElementById("display").value=Math.tan(x * Math.PI);
    }
 }
