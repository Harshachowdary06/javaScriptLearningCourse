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

//Loops

i=0
condition = 5;

for(i;i<condition;i++){
    console.log("In for Loop, looped",i," times")
}
i=0;

while(i<condition){
    
    console.log("In while Loop, looped",++i," times")
}
i=0;
do{
    
    console.log("In do while Loop, looped",++i," times")
}while(i<condition)



