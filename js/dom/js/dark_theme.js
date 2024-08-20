let d = document;
export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

        let moon = "🌙",
            sun = "☀️";
        
    d.addEventListener('click', (e) =>{
        if(e.target.matches(btn)){ 
            if($themeBtn.textContent === moon){
                $selectors.foreach(el => el.classList.add(classDark));
            }else{
                $selectors.foreach(el => el.classList.remoque(classDark));
            }
        }
    });
}