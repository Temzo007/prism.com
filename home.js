// function first(){
//     document.getElementById('ak').src="dark.png";
//     document.getElementById('az').style.background="white";
//     document.getElementById('ba').style.background="linear-gradient(skyblue, rgb(255, 255, 153))";
//     document.getElementById('aa').style.background="linear-gradient(skyblue, rgb(255, 255, 153))";
//     document.getElementById('bb').style.background="linear-gradient(skyblue, rgb(255, 255, 153))";
//     document.getElementById('bc').style.background="linear-gradient(skyblue, rgb(255, 255, 153))";
//     document.getElementById('recom').style.color="darkblue";
//     document.getElementById('trend').style.color="darkblue";
//     document.getElementById('latest').style.color="darkblue";
    
// }
function changeTheme() {
var light = document.getElementById('ak');
if (light.src.match('light.png')) {
    light.src = "dark.png";
    
} else {
    light.src = "light.png";
    
}    
}

function closeMenu() {
    var menu = document.getElementById('ad');
    if (menu.style.display.match('none')) {
        menu.style.display = "flex";
        
    } else {
        menu.style.display = "none";
        
    }
}