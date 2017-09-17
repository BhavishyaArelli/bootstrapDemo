function getRadioVal() {
 var rate_value;
if ($("#r1")[0].checked)
 {
 rate_value = $("#r1")[0].value;
 return rate_value;
}
if ($("#r2")[0].checked)
 {
 rate_value = $("#r2")[0].value;
 return rate_value;
 }
 if ($("#r3")[0].checked)
 {
 rate_value = $("#r3")[0].value;
 return rate_value;
 }
}
function myFunction() {
    var x =$("#mySelect")[0].value ;
    if(x=="1"){
    return x;
    }
    else if(x=="2"){
        return x;
    }
    else if(x=="3"){
        return x;
    }
    else if(x=="4"){
        return x;
    }
    else if(x=="5"){
        return x;
    }
}

function Calculate() {
    
    var result= getRadioVal()*myFunction();
    
  document.getElementById("answer").value = result;
  
 
}