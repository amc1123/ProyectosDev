function fibo(x, y, z, l){    
    var x1 = document.getElementById(x).value*1;
    var x2 = document.getElementById(y).value*1;
    var n = document.getElementById(z).value*1;
  
        var x3 = 0;    
        for(i = 1; i < n; i++){
                x3 = x1 + x2;
                x1 = x2;
                x2 = x3;
            };
        
        document.getElementById(l).innerHTML=x3;
}