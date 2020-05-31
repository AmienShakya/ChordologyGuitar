
         function myfunction()
         {
             let container, searchbox,textinbox, imagebox;
             container = document.getElementById("container");
              
             searchbox = container.getElementsByTagName("input");
         
             textinbox = searchbox[0].value.toUpperCase();
             imagebox = container.getElementsByTagName("div");
             for(i = 0; i < imagebox.length ; i++){
                 textonimage = imagebox[i].textContent || imagebox[i].innerText;
                 if(textonimage.toUpperCase().indexOf(textinbox) > -1)
                 {
                     imagebox[i].style.display = "";
                 }
                 else{
                     imagebox[i].style.display = "none";
                 }
             }

         }
