window.addEventListener("scroll",scroll_animation);
var scrolled = false;
var scrolled2 = false;
function scroll_animation()
{
        var info = document.getElementById("info");
        var zarzad = document.getElementById("zarzad");
        var bottomWindow = window.pageYOffset + window.innerHeight;
        if(bottomWindow>=info.offsetTop && scrolled==false)
        {
            info.animate([
                {opacity:0.5},
                {opacity:1}
            ],
            {
                duration:1500
            });
            scrolled=true;
        }
        if(bottomWindow>=zarzad.offsetTop && scrolled2==false)
        {
            zarzad.animate([
                {opacity:0.5},
                {opacity:1}
            ],
            {
                duration:1500
            });
            scrolled2=true;
        }
}