//menu hamburguesa
import hamburguerMenu from "./menu_hamburguesa.js";
import {reloj, alarma} from "./reloj.js"
import { shortcuts, moveBall } from  "./teclado.js";
import { countdown } from "./countdown.js"; 
import scrollUp from "./scroll_up.js";
import darkTheme from "./dark_theme.js";
import resposiveMedia from "./objeto-resposive.js";

const d = document;


d.addEventListener("DOMContentLoaded", (e) =>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    reloj(".clock",".init-rel",".stop-rel");
    alarma("assets/alarm.mp3",".alarm-init",".alarm-stop");
    scrollUp(".scroll-up");
    resposiveMedia(
        'youtube', 
        '(min-width: 1024px)', 
        '<a href="https://youtu.be/ekr2nIex040" target="_blank" rel="noopener">Ver Video</a>', 
        '<iframe width="664" height="480" src="https://www.youtube.com/embed/ekr2nIex040" title="ROSÉ &amp; Bruno Mars - APT. (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');

    resposiveMedia(
        'gmaps', 
        '(min-width: 1024px)', 
        '<a href="https://maps.app.goo.gl/N8KMypVSy5ovJrdLA" target="_blank" rel="noopener">Ver Mapa</a>', 
        '<iframe width="664" height="480" src="https://maps.app.goo.gl/N8KMypVSy5ovJrdLA" title="ROSÉ &amp; Bruno Mars - APT. (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
});

d.addEventListener("keydown",(e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

countdown(".contador", "2024,12,29");

darkTheme(".dark-light","dark-mode");

