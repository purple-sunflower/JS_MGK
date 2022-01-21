var hour = 0;
var min = 0; 
var sec = 0;
var k = 0;

var time="";
var h1=document.getElementsByTagName('h1');
var set;

function stop(){
    k=1;
    timestop();
}

function reset(){
    clearTimeout(set);
    time = "00 : 00 : 00";
    h=0; m=0; s=0;
    h1[0].innerHTML = time;
 }

function start(){
    timer();
    timestop();
    set = setTimeout(start,1000)
 }

function timestop(){
    if (k==1) {
    clearTimeout(set);
    }
}

function timer(){
    time="";

    sec++;
    if (sec >= 60){
        min++;
        sec = 0;
    }

    if (min >= 60){
        hour++;
        min = 0;
    
    }

    if (hour==99 && min==59 && sec==59){
        stop();
    }
        
    if (hour<10) {
        time +='0';
    }
    time+=hour;
    time+=' : ';
        
    if (min<10) {
        time +='0';
    } 
    time+=min;
    time+=' : ';
        
    if (sec<10) {
        time +='0';
    }
    time+=sec;
    
    h1[0].innerHTML=time;   
    }