var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

document.body = document.createElement("body"); 
var body = document.body; 

function looper(data){
var dataEle = document.createElement("div"); 
var ele = document.createElement("div");
  if(isNaN(data)){
    if(data.length >= 6){
      dataEle.innerHTML = "The value is " + data +" and the length is greater than five.";
    }else{ 
    }
  }else if(data < 10){
    dataEle.innerHTML = "The value is " + data + " which is below 10."; 
  }else if(data === 15){
    dataEle.innerHTML = "The value is " + data + " which is exactly 15";
  }else{
    dataEle.innerHTML = "The value is " + data + ": normal.";
  }
 ele.appendChild(dataEle); 
  body.appendChild(ele); 
  
   ele.addEventListener("click", function(){
   ele.style.color = "blue"; 
   })
}


for(i=0; i<stringers.length; i++){
  looper(stringers[i]);
};