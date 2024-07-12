const d = document;

export function countdown(panel, fechaLimite){
    const $countdown = d.querySelector(panel);
    let limit = new Date(fechaLimite).getTime(),
    restante;
    
    setInterval(() => {
       let today = new Date().getTime();
       restante = limit - today
        let days = Math.floor(restante / (1000 * 60 * 60 * 24)), hours =  Math.floor(restante % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)), min = Math.floor(restante % (1000 * 60 * 60) / (1000 * 60)), sec= Math.floor(restante % (1000 * 60) / (1000));
        $countdown.innerHTML = `<h3>Faltan: ${days} días, ${hours}H:${min}M:${sec}S para la fecha limite. -> Fecha Limite: ${fechaLimite}</h3>`;
     },1000);    
     
}