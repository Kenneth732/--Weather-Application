// js selectors
var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "3045dd712ffe6e702e3245525ac7fa38"


// 
function convertion(val){
    return (val - 273).toFixed(2)
}
//Now we have to collect all the information with the help of fetch method
