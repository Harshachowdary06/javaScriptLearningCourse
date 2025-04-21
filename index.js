
/*
this file is nothing but adding footer to the html file
*/

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
    footer1.style.marginBottom= "0%";
    footer1.style.position ="fixed;"
    footer1.style.width="100%"
}

// setting module style for in index file modules

{

    if(document.body.querySelector(".module") != " "){
        
        for(let block =0;block <document.body.querySelectorAll("div").length;block++){
    
        let module = document.body.querySelectorAll(".module")[block];
        document.body.querySelector(".module").style.backgroundColor = "aquablue";
        module.style.width= "fit-Screen";
        module.style.height = "fit-content";
        module.style.padding ="30px";
        module.style.marginBottom = "30px";
        module.style.backgroundColor=  "black";
        module.style.color="white"
        module.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
        
        console.log(block,": got executed succesfully")
        }


    }
}
