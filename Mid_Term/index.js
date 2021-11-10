redirect(){

var nameBox = document.getElementById('nameBox').value ;
var ageBox = document.getElementById('ageBox').value ;
var TMSBox = document.getElementById('total monthly salary').value ;


if (ageBox >= 25 && TMSBox >==100000) {
    p2.innerText = "Monthly bonus is"=TMSBox*.2 
}
else {
   p2.innerText = "Sorry, you failed this time."
}


if (total >= 80) {
    p3.innerText = "You got A grade" ;
}
else if (total >= 70){
    p3.innerText = "You got B grade";
}

else if (total >= 60){
    p3.innerText ="You got C grade"; 
}

else {
    p3.innerText = "You got F grade"; 
}






p1.innerText = student + " your total marks: " + total; 

document.getElementById('nameBox').value = '' ; 
document.getElementById('midBox').value = '' ; 
 document.getElementById('finalBox').value = '' ; 

}