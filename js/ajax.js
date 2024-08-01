(()=>{
    const xhr = new XMLHttpRequest(),
     $xhr = document.getElementsById("xhr"), 
     $fragment = document.createDocumentFragment();

     xhr.addEventListener("readystatechange", e=>{
         if(xhr.readyState !== 4) return;
         if(xhr.status >= 200 && xhr.status < 300){
             console.log(xhr);
             console.log("exito");
             let json = JSON.parse(xhr.responseText);
         }else{
            console.log("error");
         }

     });

     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
     xhr.send();

})();