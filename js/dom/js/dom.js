//menu hamburguesa
import hamburguerMenu from "./menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
});

//Reloj y alarma

d.addEventListener("click", (e) =>{
    const clockstartBtn = d.querySelector(".init-rel");
    if(e.target.matches(".init-rel")){
        setInterval(() => {
            const clock = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
            d.querySelector(".clock").innerHTML = `<h3>${clock}</h3>`;
        }, 1000);
        clockstartBtn.setAttribute("disabled", true);
    }
    if(e.target.matches(".stop-rel")){
        clearInterval();
        d.querySelector(".clock").innerHTML = null
        clockstartBtn.removeAttribute("disabled");
    }
});