function step10(){ 
    best = document.getElementById("b10");
    best.style.backgroundColor="yellow"; 
}
function step9(){
    
    alert("First-Fit has FAILED. No more processes can be allocated at this time!")
    best = document.getElementById("b7");
    best.style.backgroundColor="yellow"; 


    setTimeout(()=>step10(),2000); 
}
function step8(){
    first = document.getElementById("f10");
    best = document.getElementById("b6");
    first.style.backgroundColor="red"; 
    best.style.backgroundColor="yellow"; 
    setTimeout(()=>step9(),2000); 
}
function step7(){
    first = document.getElementById("f7");
    best = document.getElementById("b9");
    first.style.backgroundColor="yellow"; 
    best.style.backgroundColor="yellow"; 
    setTimeout(()=>step8(),2000); 
}
function step6(){
    first = document.getElementById("f6");
    best = document.getElementById("b1");
    first.style.backgroundColor="yellow"; 
    best.style.backgroundColor="yellow"; 
    setTimeout(()=>step7(),2000); 
}
function step5(){
    alert("Worst-Fit has FAILED. No more processes can be allocated at this time!")
    first = document.getElementById("f8");
    best = document.getElementById("b8");
    first.style.backgroundColor="yellow"; 
    best.style.backgroundColor="yellow"; 
    setTimeout(()=>step6(),2000); 
}
function step4(){
    first = document.getElementById("f1");
    worst = document.getElementById("w6");
    best = document.getElementById("b5");
    first.style.backgroundColor="yellow";  
    worst.style.backgroundColor="red"; 
    best.style.backgroundColor="yellow"; 
    setTimeout(()=>step5(),2000); 
}
function step3(){
    first = document.getElementById("f3");
    worst = document.getElementById("w4");
    best = document.getElementById("b3");
    first.style.backgroundColor="yellow";  
    worst.style.backgroundColor="yellow"; 
    best.style.backgroundColor="yellow"; 
    setTimeout(()=>step4(),2000); 
}
function step2(){
    first = document.getElementById("f4");
    worst = document.getElementById("w10");
    best = document.getElementById("b4");
    first.style.backgroundColor="yellow";  
    worst.style.backgroundColor="yellow"; 
    best.style.backgroundColor="yellow"; 
    setTimeout(()=>step3(),2000); 
}
function runProcess(){
    console.log("start");
    let first = document.getElementById("f2");
    let worst = document.getElementById("w8");
    let best = document.getElementById("b2");
    first.style.backgroundColor="yellow";  
    worst.style.backgroundColor="yellow"; 
    best.style.backgroundColor="yellow"; 
    setTimeout(()=>step2(),2000);
}
