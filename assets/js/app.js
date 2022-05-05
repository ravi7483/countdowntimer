var cl = console.log;

var contdowntimer = document.getElementById('contdowntimer');
var coutdowntimers = document.getElementById('coutdowntimers');

function contdowntimer1(){
    var currentdate = new Date();
    var futuredate = new Date(2022,7,15);

    var diff = futuredate.getTime() - currentdate.getTime();

    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    var min =Math.floor((diff % (1000*60*60)) / (1000*60));
    var sec = Math.floor((diff % (1000*60))/ (1000));

  /*    var session = "AM"
    if(hours > 12){
        session = "PM"
        hours = hours - 12;
    } */
    
  /*   if(hours < 10){
        hours = "0" + hours
    }
    if(min < 10){
        min = "0" + min
    }
    if(sec < 10){
        sec = "0" + sec
    }
 */  
   //  sec = (sec < 10) ? "0" + sec : sec;

     setInterval(contdowntimer1,1000);
    var result = `${days} day, ${setZeros(hours)} hr : ${setZeros(min)} min : ${setZeros(sec)} sec` // ${session}     
    contdowntimer.innerHTML =result;
}

contdowntimer1();

function setZeros(x){
    x = (x < 10) ? "0" + x :  x ;
    return x;
}

// function coutdowntimerss(){
   
    // var birthdate = new Date(2000,1,5);
    // var Currentdate = new Date();

    // var diffs = Currentdate.getTime() + birthdate.getTime();
     // cl(diffs);
     
  
// setInterval(coutdowntimerss,1000);
// }
// coutdowntimerss()