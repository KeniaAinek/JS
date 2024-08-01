const d = document;
const verticalPosition = document.scrollingElement.scrollTop;

export function scrollUp(btn, verticalPosition){

    if(verticalPosition > 600){
        d.querySelector(btn).classList.disabled = false;
    }
}