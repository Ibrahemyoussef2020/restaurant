/******************************************** */
/*                a side                      */
/******************************************** */
let drop =  document.getElementById("drop");
let navbarText = document.getElementById("navbarText");
let nav = document.querySelector(".nav");


drop.onclick = ()=>{
    navbarText.classList.toggle("menu-aside");
}
/******************************************** */
/*                scroll                      */
/******************************************** */
let scrollBtn = document.querySelector(".scroll");

window.onscroll = function(){
    if(window.scrollY >= 150){
        nav.style.background = "#ddd";
    }else{
        nav.style.background = "transparent";
    }
    if(window.scrollY >= 2000){
        scrollBtn.classList.add("scroll-show");
    }else{
        scrollBtn.classList.remove("scroll-show");
    }

    scrollBtn.onclick = function(){
        window.scrollTo({
            top : 0,
            behavior : "smooth",
        });
    }
}
/******************************************** */
/*                menus                       */
/******************************************** */
let menusCol = document.querySelectorAll(".menus-col");
let menusImg = document.querySelectorAll(".menus-img");

for(let m = 0 ; m < menusCol.length ; m++){
   menusCol[m].onmouseover = function(){

        for(i = 0 ; i < menusImg.length ; i++){
                if (this.title == menusImg[i].title) {
                      menusImg[i].style.transform = "scale3d(1.2,1.2,1.2)";
                }
            }
            menusCol[m].onmouseleave = function(){

                for(i = 0 ; i < menusImg.length ; i++){
                        if (this.title == menusImg[i].title) {
                              menusImg[i].style.transform = "scale3d(1,1,1)"
                        }
                }
            }        
    }

}
/******************************************** */
/*                icons                       */
/******************************************** */

let iconContainer = document.querySelectorAll(".con");
let icons = document.querySelectorAll(".i");

for(let c = 0 ; c < iconContainer.length ; c++){
    iconContainer[c].onmouseover = function(){
 
         for(i = 0 ; i < icons.length ; i++){
                 if (this.title == icons[i].title) {
                    icons[i].style.transform = "rotatey(180deg)";
                 }
             }
             iconContainer[c].onmouseleave = function(){
 
                 for(i = 0 ; i < icons.length ; i++){
                         if (this.title == icons[i].title) {
                            icons[i].style.transform = "rotatey(0deg)";
                         }
                 }
             }        
     }
 
 }
/////////////////////////////////////////////////////////
//                         articles                    //
/////////////////////////////////////////////////////////
const  articleI = document.querySelectorAll("article > div");
const  articleB = document.querySelectorAll("article > p");

for(let s = 0 ; s < articleI.length ; s++){
    articleI[s].addEventListener("click" , _=>{
        articleB.forEach(e => {
            e.title == articleI[s].className ? e.classList.toggle("fit-content") : "";   
        });
    })
}




