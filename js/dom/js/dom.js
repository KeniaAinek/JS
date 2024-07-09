//menu hamburguesa
import hamburguerMenu from "./menu_hamburguesa.js";
import {reloj, alarma} from "./reloj.js"

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    reloj(".clock",".init-rel",".stop-rel");
});


