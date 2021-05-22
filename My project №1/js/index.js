let btn = document.getElementById("theme-button");
let link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "css/style.css";
    let darkTheme = "css/light.css";

    let currTheme = link.getAttribute("href");
    let theme = "dark";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "light";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "dark";
    }

    link.setAttribute("href", currTheme);
}
