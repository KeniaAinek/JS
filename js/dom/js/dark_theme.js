let d = document,
state = localStorage.getItem('state');

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");
        

        let moon = "🌙",
            sun = "☀️";
        
    d.addEventListener('click', (e) =>{
        if(e.target.matches(btn)){ 
            if($themeBtn.textContent === moon){
                $selectors.forEach(el => el.classList.add(classDark));
                $themeBtn.textContent = sun;
                localStorage.getItemItem('Btnstate', $themeBtn.textContent);
            }else{
                $selectors.forEach(el => el.classList.remove(classDark));
                $themeBtn.textContent = moon;
                state = $themeBtn.textContent;
            }
        }
    });
}