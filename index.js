
/*
this file is nothing but adding footer to the html file plus top bar

*/
 {
const navi = document.createElement("nav");
navi.classList.add("title");
naviBarData = document.title;
document.body.appendChild(navi);
navi.innerHTML=naviBarData;
    // styling
    navi.style.backgroundColor = "grey";
    navi.style.color ="white";
    navi.style.fontFamily = "monospace";
    navi.style.position ="fixed";
    navi.style.width="100%";
    navi.style.top="0px";
    navi.style.left="0px";
    navi.style.textAlign="center";
    navi.style.fontSize="30px";
    navi.style.padding="5px";
    //setting body height
    document.body.style.paddingBottom = navi.offsetHeight+30  + "px";
    

}
const footer1 = document.createElement("footer");
footer1.classList.add("goBackHome");
footer1.setAttribute("id","goBackHome");

document.body.appendChild(footer1);


footerData =    `
                    <center> 
                    <h2> <a href = "../">Sai Sri Harsha Pemmasani </a><h2>
                    <p> @ Click on the name to go back to home or main menu</p>
                    </center>

                `;
footer1.innerHTML = footerData;
// styling

{
    footer1.style.backgroundColor = "grey";
    footer1.style.color ="black";
    footer1.style.fontFamily = "monospace";
    footer1.style.position ="fixed";
    footer1.style.width="100%";
    footer1.style.bottom="0px"
    footer1.style.left="0px"
    document.body.style.marginTop =   footer1.offsetHeight + "px";
}

// setting module style for in index file modules

{

    if(document.body.querySelector("pre") != null){
        
        for(let block =0;block <document.body.querySelectorAll("div").length;block++){
    
        let module = document.body.querySelectorAll("pre")[block];
        module.style.width= "fit-Screen";
        module.style.height = "fit-content";
        module.style.padding ="30px";
        module.style.marginBottom = "30px";
        module.style.backgroundColor=  "black";
        module.style.color="white"
        module.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
        
    //setting body height
   // document.body.style.paddingBottom = module.offsetHeight + "px";
        
        console.log(block,": got executed succesfully")
        }


    }
}
