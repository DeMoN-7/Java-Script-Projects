var btn = document.querySelector("#chkbtn");
btn.addEventListener("click", function() {
    var princ = parseFloat(document.querySelector("#principle").value);
    var intrest = parseFloat(document.querySelector("#rate").value);
    var timee = parseFloat(document.querySelector("#time").value);
  
        var result = princ +((intrest%princ )* timee);
        alert("Result: " + result);
  
});
