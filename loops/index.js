//styling code
{
    codeStyle = document.body.querySelectorAll("pre");
    for(block = 0;block<document.body.querySelectorAll("pre").length;block++){
        
        let module = document.body.querySelectorAll("pre")[block];
        module.style.width="fit-content"
        module.style.width="fit-content"+"50px";
        module.style.height = "fit-content";
        module.style.padding = "30px 20% 30px 20px";
        module.style.marginBottom = "30px";
        module.style.backgroundColor=  "black";
        module.style.color="white"
        module.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    }
}

 dictionary ={
    "name" :"harsha",
    "age":25
}
let a =[5,6,7];


console.log("type of a: ",typeof(a));


console.log("type of",typeof(dictionary.name));

