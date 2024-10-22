const d = document,
w = window;

export default function resposiveMedia(id, mq, mobileContent,desktopContent){

    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
    }

    breakpoint.addListener(responsive);
    resposive(breakpoint);
}