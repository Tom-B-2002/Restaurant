var diners = document.getElementsByTagName("li");

window.onload = function(){
    document.getElementById("js--pastafilter").onclick=function(){
        for(var i = 0; i < diners.length; i++){
          if(diners[i].dataset.category !== 'pasta'){
            diners[i].style.visibility = "hidden";
          }
          }
        }
        document.getElementById("js--burgerfilter").onclick=function(){
            for(var i = 0; i < diners.length; i++){
              if(diners[i].dataset.category !== 'burger'){
                diners[i].style.visibility = "hidden";
              }
              }
            }
            document.getElementById("js--pizzafilter").onclick=function(){
                for(var i = 0; i < diners.length; i++){
                  if(diners[i].dataset.category !== 'pizza'){
                    diners[i].style.visibility = "hidden";
                  }
                  }
                }
    }
