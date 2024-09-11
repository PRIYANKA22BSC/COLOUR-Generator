let colors=["#ff0000","#0000ff","#3cb371","#ee82ee","#ffa500","#6a5acd"];


let div1=document.querySelector("#lefttopdiv");
let div2=document.querySelector("#righttopdiv");
let div3=document.querySelector("#leftbottomdiv");
let div4=document.querySelector("#rightbottomdiv");
let body=document.querySelector("body");
div1.style.background="";

div1.addEventListener("click",()=>{
   color= Math.floor(Math.random() * colors.length);
  let randomcol=colors[color];
  div1.style.background=randomcol;
  body.style.background=randomcol;

})
div2.addEventListener("click",()=>{
    color= Math.floor(Math.random() * colors.length);
    let randomcol=colors[color];
    div2.style.background=randomcol;
    body.style.background=randomcol;
    })
    div3.addEventListener("click",()=>{
        color= Math.floor(Math.random() * colors.length);
        let randomcol=colors[color];
        div3.style.background=randomcol;
        body.style.background=randomcol;
      
        })
        div4.addEventListener("click",()=>{
            color= Math.floor(Math.random() * colors.length);
            let randomcol=colors[color];
            div4.style.background=randomcol;
            body.style.background=randomcol;
            })
    
          