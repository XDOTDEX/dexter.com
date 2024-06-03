 let menu = document.querySelector("#menu"),
            bar = document.querySelector("nav i.fa-bars"),
            nav = document.querySelector("nav"),
            header = document.querySelector(".header"),
            all = document.querySelector(".all"),
            box = document.querySelector(".box");
            menu.style.height="0px";
            bar.addEventListener("click",()=>{
            if(menu.style.height=="0px"){
                menu.style.height="165px";
                menu.style.paddingTop="5px";
            }else{
                menu.style.height="0";
                menu.style.paddingTop=0;
            }/*Never trust anyone */
            });
            window.addEventListener("click",(e)=>{
        if(e.target!==menu && e.target!==bar){
            menu.style.height="0";
            menu.style.paddingTop=0;
        }/* Never trust anyone*/
        if(e.target!==box && !box.contains(e.target)){
            all.style.display="none";
        }/*   */
            });
            window.addEventListener("touchstart",(e)=>{
            if(e.target!==box && !box.contains(e.target)){
            all.style.display="none";
        }/*   */
            });
        window.addEventListener("scroll",()=>{
        if(window.scrollY>70){
           nav.style.position="fixed";
           nav.style.top=0;
           nav.style.left=0;/*  */
           nav.style.zIndex=1000;
           header.style.marginTop="63px";
        }else{
            nav.style.position="static";
           header.style.marginTop=0;
        }
        });
window.addEventListener("click",play);
function play(){ document.getElementById("peace").play();
}