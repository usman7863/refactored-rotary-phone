const endDate = " 22 February 2023 12:00 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
//const clock = () => {

//}
    
function clock (){
     const end = new Date (endDate);
     const now = new Date();
     const diff = (end-now) /1000;
     console.log (diff);
     if(diff < 0) return;
     //convert into days;
     inputs[0].value= Math.floor(diff / 3600 / 24);
     //convert into hours
     inputs[1].value= (Math.floor(diff/3600) %24)
      //convert into minutes
      inputs[2].value = Math.floor( (diff/60)%60)
      //convert in Seconds 
      inputs[3].value = Math.floor((diff)%60)

}
//initial Call
clock()
/**
 * 1 day 24 hr
 * 1 hr 60 minutes
 * 60 minutes  seconds 3600
 */
setInterval (()=>{
      clock()
},1000)