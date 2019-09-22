function load(){
      document.getElementById("myBtn").addEventListener("click", telltime);
}

function telltime() {
      var out = ""; 
      var now = new Date(); 
      out += "<br/> Date:" + now.getDate(); 
      out +="<br/> Month: " + now.getMonth();
      out +="<br/> Year: " + now.getFullYear(); 
        out += "<br/> Hours:" + now.getHours(); 
      out +="<br/> Minutes: " + now.getMinutes();
      out +="<br/> Seconds: " + now.getSeconds(); 
      document.getElementById("div1").innerHTML = out;
      var myElement = document.getElementById("myBtn");
                  if(myElement.style.backgroundColor == 'blue') {
                  myElement.style.backgroundColor = 'yellow';
                  myElement.style.color = 'pink';

                  }
                  else {
                        myElement.style.backgroundColor = 'pink';
                        myElement.style.color = 'yellow';
                  }
        
            
}


