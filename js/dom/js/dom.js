//menu hamburguesa
import hamburguerMenu from "./menu_hamburguesa.js";
import {reloj, alarma} from "./reloj.js"
import { shortcuts, moveBall } from  "./teclado.js";
import { countdown } from "./countdown.js"; 

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    reloj(".clock",".init-rel",".stop-rel");
    alarma("assets/alarm.mp3",".alarm-init",".alarm-stop");
});

d.addEventListener("keydown",(e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

countdown(".contador", "2024,12,29");
