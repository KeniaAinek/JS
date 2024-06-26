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

const $cards = document.querySelector(".cards"),
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

