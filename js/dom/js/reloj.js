const d = document;

export function reloj(clock, btnPlay, btnStop){
    d.addEventListener("click", (e) =>{
        let start;
        let clockH;
        const clockstartBtn = d.querySelector(btnPlay);
    
        if(e.target.matches(btnPlay)){
                start = setInterval(() => {
                clockH = new Date().toLocaleTimeString()
                d.querySelector(clock).innerHTML = `<h3>${clockH}</h3>`;
            }, 1000);
            clockstartBtn.setAttribute("disabled", true);
        }
        
        if (e.target.matches(btnStop)) {
            clearInterval(start);
            d.querySelector(clock).innerHTML = null;
            clockstartBtn.removeAttribute("disabled");
        }
    });
}

export function alarma(){
    d.addEventListener("click", (e) => {
        let alarm, alarmBtn;
        if(e.target.matches(".alarm-init")){
        alarm = setInterval(() =>{
            d.querySelector("#alarma").play();
        },1000);
    
        d.querySelector(".clock").innerHTML = `<h3>Alarma activada <i class="fa fa-volume-up" aria-hidden="true"></i>
        </h3>`;
        alarmBtn.setAttribute("disabled", true);
        }
    
        if(e.target.matches(".alarm-stop")){
            closeInterval(alarm);
            d.querySelector("#alarma").pause();
            d.querySelector("#alarma").currentTime = 0;
            d.querySelector(".clock").innerHTML = `<h3>Alarma detenida <i class="fa fa-volume-mute" aria-hidden="true"></i>
            </h3>`;
            alarmBtn.removeAttribute("disabled");
        }
    });
}