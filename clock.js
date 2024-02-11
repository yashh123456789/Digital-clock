


let Hrs=document.getElementById("Hrs");
let Min=document.getElementById("Min");
let Sec=document.getElementById("Sec");
 setInterval(()=>{
    let currentTime= new Date();

Hrs.innerHTML=currentTime.getHours();
Min.innerHTML=currentTime.getMinutes();
Sec.innerHTML=currentTime.getSeconds();



 })




   
    
