function hover(){
   let element =  document.getElementById("imgartist")
   element.style.opacity=".6"
   let desc  = document.getElementsByClassName("artist-desc")
    console.log(desc)
    for(let i=0;i<=desc.length;i++){
        desc[i].style.color="lightblue"
    }
   
   //    desc.style.color="yellow"
}

function unhover(){
    let element = document.getElementById("imgartist")
    element.style.opacity="1"
    let desc  = document.getElementsByClassName("artist-desc")
    console.log(desc)
    for(let i=0;i<=desc.length;i++){
        desc[i].style.color="grey"
    }
}
 
// let a = document.querySelectorAll("song-box")
// console.log( "heyyyy",a)

function hoverbox(){
    let title = document.getElementsByClassName("song-title")
    title.innerHTML.style.color="white"
    // title.forEach(function(element){
    //     element.style.color="white"
    // })
    console.log(title)
    let artist = document.getElementsByClassName("song-artist")
    // artist.style.color="white"
   
  
}
function unhoverbox(){

}

let arr = [
    {name:"choo lo",
artist:"local train",
},
    {name:"Baarishein",
artist:"Anuv jain",
},
    {name:"Mazak",
artist:"Anuv jain",
},
    {name:"Mishri",
artist:"Anuv jain",
},
    {name:"Husn",
artist:"Anuv jain",
},
    {name:"Khudi",
artist:"local train",
},
]
// a.forEach(function(el){
//     el.addEventListener("mouseover",hoverbox)
//     el.addEventListener("mouseout",unhoverbox)
// })





// let a  = document.querySelectorAll("song-box")
// console.log(a)
// function up(){
//     this.children



// }
// function down(){

// }
// a.forEach(function(element){
//     element.addEventListener("mouseover",up)
//     element.addEventListener("mouseout",down)

// })

