// ----header scroll
let logo_blck = document.querySelector(".image_logo_black")
let logo_white = document.querySelector(".image_logo_white")
let navlink = document.querySelectorAll(".nav-link")
let burger = document.querySelector(".burger")
let bgclear = document.querySelector(".navbar-collapse")

function scrollheader() {
    const header = document.getElementById('navigation')
    if (this.scrollY >= 200){
        header.classList.add('scroll-navigation')
        logo_blck.style.display="block"
        logo_white.style.display="none"
        navlink.forEach(elem=>{
            elem.style.color = "#8f969d"
        })
        burger.style.color="black"
        bgclear.style.backgroundColor="white"
    }
     else{
     header.classList.remove('scroll-navigation')
     logo_blck.style.display="none"
     logo_white.style.display="block"
     navlink.forEach(elem=>{
        elem.style.color = ""
    })
    burger.style.color=""
    bgclear.style.backgroundColor=""



    };

}

window.addEventListener("scroll", scrollheader)



// ----popup vide
let videoo = document.querySelectorAll(".play-video-block")
let popup = document.querySelector('.popup-video')
let close = document.getElementById("close")
var body = document.getElementsByTagName("body")


videoo.forEach(element => {

    element.onclick=()=>{
        popup.style.display="block"
      
      close.onclick=()=>{
            popup.style.display="none"
            

        }

    }

    
})


// EFECT TITLE UP

let effect = document.querySelectorAll(".effect")
let title = document.querySelectorAll(".section_header")

window.addEventListener("scroll", function(){

  for( var i=0; i<title.length; i++){
      let windowheight=window.innerHeight;
      let top = title[i].getBoundingClientRect().top
      toppoint = 50
      console.log(top)
      if(top<windowheight-toppoint){
        title[i].classList.add("aactive")
      
        

      }
  }

 
})

///efect card show
let card_effect = document.querySelectorAll(".card_effect")

window.addEventListener("scroll", function(){

    for (var i=0; i<card_effect.length; i++){
        let windowheight=window.innerHeight;
      let top = card_effect[i].getBoundingClientRect().top
      toppoint = 50
      if(top < windowheight - toppoint){
        card_effect[i].classList.add("fadein")
      }
       
    }
})

 




// ----choose selected

$(".choose").click(function(){
    $(this).toggleClass("jsbtn")
    if($(this).text()=="choose"
    ){
        $(this).text("selected")

    }else{
        $(this).text("choose")
 
    }   
})


// ----zoom photo

window.addEventListener("scroll", function(){
    let zoom = document.querySelector(".zoom")
        let windowheight = window.innerHeight;
        let top = zoom.getBoundingClientRect().top
        toppoint = 150
        console.log(top)
        if(top < windowheight - toppoint){
            zoom.classList.add("zoomjs")
  
        
    }
  
   
  })


// ---- card front and back

  let contact = document.getElementById("contact_us")
  let scene = document.querySelector(".card_par")
  let cnt_close = document.getElementById("cnt_close")
  contact.addEventListener("click",function(){
    scene.classList.add("card_par_rotate")
    cnt_close.addEventListener("click",function(){
        scene.classList.remove("card_par_rotate")
    })
  })





  // --- watch_2 plus

  $(".plus").click(function(){

    $(this).children(".line").toggleClass("w_2")
    $(this).children(".line2").toggleClass("l_2")

  
})

