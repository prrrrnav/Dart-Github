let songvar = document.querySelectorAll(".song")
let namevar = document.querySelectorAll('h3')
console.log(songvar)

// function namecolorblack(){
//     this.style.color = "black";
// }
// function namecolorwhite(){
//     this.style.color="white";
// }

// namevar.forEach(function(element){
//     element.addEventListener('mouseenter',namecolorblack)
//     element.addEventListener('mouseleave',namecolorwhite)
// })

let a = document.getElementsByClassName('artist-info')
a[0].children[1].style.color = "grey";
console.log(a)

function mouseover(){
    this.style.backgroundColor = "grey";
    this.children[1].children[0].style.color = "black";
    this.children[1].children[1].style.color = "black";
    this.style.cursor = "pointer";
    this.style.borderRadius = "10px";

    
    
    
}
function mouseout(){
    this.style.backgroundColor = "transparent";
    this.children[1].children[0].style.color = "white";
    this.children[1].children[1].style.color = "white";
   
    
}

songvar.forEach(function(element){
    element.addEventListener('mouseenter', mouseover)
    element.addEventListener('mouseleave', mouseout)

})