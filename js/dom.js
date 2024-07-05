/* console.log(document);

let texto = "Hola, soy Kenia"

const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */


/* console.log("***********Elementos del Documento**********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts); */

/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelector(".card")[2]);
 */

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://www.youtube.com");
console.log($linkDOM.hasAttribute("rel"));
console.log($linkDOM.removeAttribute("rel"));
console.log($linkDOM.hasAttribute("rel")); */

//Data-Atributes 
/* console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a youtubey comparte";
console.log($linkDOM.dataset.description); */

/* const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRigth = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style")); */

//Variables CSS-Custom Properties CSS
/* const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor); */

/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia"); */

/* const $whatItsDOM = document.getElementById("que-es");

let text = `<p>El modelo de Objetos del Documento(<b><i>DOM-Document Object Model</i></b>) es un API para documentos HTML y XML</p>
<p>Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS</p>
<p><mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark></P>
`;

$whatItsDOM.innerText = text;
$whatItsDOM.textContent = text;
$whatItsDOM.innerHTML = text;
$whatItsDOM.outerHTML = text;
 */

/* $cards= document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */

/* const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards");
$figure2 = document.createElement("figure");

$img.setAttribute("src", "https://picsum.photos/200/200");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `<img src="https://picsum.photos/200/200/?blur=2" alt="People"> <figcaption>People</figcaption>`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera","Verano","Otoño","Invierno"],
$ul = document.createElement("ul");

document.write("<h3> Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const continentes = ["Africa","America","Asia","Europa","Oceania"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) =>
    ($ul2.innerHTML += `<li>${el}</li>`));

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
],
$ul3 = document.createElement("ul");
$fragment  = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses de Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

/* const $cards = document.querySelector(".card"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent =[
    {
        title: "Tecnologia",
        img: "https://picsum.photos/id/8/200/200",
    },
    {
        title: "Animales",
        img: "https://picsum.photos/id/40/200/200",
    },
    {
        title: "Arquitectura",
        img: "https://picsum.photos/id/57/200/200",
    },
    {
        title: "Gente",
        img: "https://picsum.photos/id/22/200/200",
    },
    {
        title: "Naturaleza",
        img: "https://picsum.photos/id/19/200/200",
    },
];

cardContent.forEach(el =>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;
    
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true);


$newCard.innerHTML = `<img src="https://picsum.photos/200/200" alt="Any">
<figcaption>Any</figcaption>`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard, $cards.firstElementChild);
document.body.appendChild($cloneCards); */

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCard = `<img src="https://picsum.photos/200/200" alt="Any">
<figcaption>Any</figcaption>`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
//$cards.insertAdjacentElement("beforebegin", $newCard);
//$cards.insertAdjacentElement("afterbegin", $newCard);
//$cards.insertAdjacentElement("beforeend", $newCard);
//$cards.insertAdjacentElement("afterend", $newCard);

//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
$cards.after($newCard);

 */

 /*  function holaMundo(){
    alert("Hola mundo");
    console.log(event);
  }

  function saludar(nombre = "Desconocid@"){
    alert(`HolA ${nombre}`);
    console.log(event);
  }

  const $eventoSemantico = document.getElementById("evento-semantico");
  const $eventoMiltiple = document.getElementById("evento-multiple");
  const $eventoRemover = document.getElementById("evento-remover");

  $eventoSemantico.onclick = holaMundo;
  $eventoSemantico.onclick = function (e){
    alert("Hola mundo manejador de eventos semanticos");
    console.log(e);
    console.log(event);
  };

  $eventoMiltiple.addEventListener("click",holaMundo);
  $eventoMiltiple.addEventListener("click",(e) => {
    alert("Hola mundo Manejador de Eventos Multiples");
    console.log(e.target);
    console.log(e.type);
  }); 

  $eventoMiltiple.addEventListener("click", () => {
    saludar();
    saludar("Kenia");
});

const removerDobleClick = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick );
}

$eventoRemover.addEventListener("dblclick", removerDobleClick); */

/* 
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

document.addEventListener("click", (e) =>{
    console.log('Click en',e.target);
    if(e.target.matches(".events-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola estas visitando la pagina de Jonathan Mircha");
        e.preventDefalult();
    }
});

//BOM Browser documeten ojkect
window.addEventListener("resize", (e) => {
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(e);
});

/* window.addEventListener("scroll", (e) => {
   console.clear();
   console.log("**********Evento Scroll **********");
   console.log(window.scrollX);
   console.log(window.scrollY);
   console.log(e);
});
 
window.addEventListener("load", e => {
   console.log("**********Evento Load **********");
   console.log(window.screenX);
   console.log(window.screenY);
   console.log(e);
});

document.addEventListener("DOMContentLoaded", e => {
    console.log("**********Evento DOMContentLoaded**********");
   console.log(window.screenX);
   console.log(window.screenY);
   console.log(e);
});

 */
/* 
const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) =>{
    ventana = window.open("http://jonmircha.com");
});

$btnCerrar.addEventListener("click",(e) =>{
    //window.close();
    ventana.close();
});

$btnImprimir.addEventListener("click", (e) =>{
    window.print();
});
 */

/* console.log("**********Objeto URL (location)");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

 */

/* console.log("********************Objeto History *************");
console.log(history);
console.log(history.length);
console.log(history.length);
console.log(history.forward(1));
console.log(history.go(3));
console.log(history.back(2));

 */

/* console.log("********** Objeto Navegador (vavigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */





