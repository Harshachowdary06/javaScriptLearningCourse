// script that runs html content
// Function Declaration
{
  // function declaration
const code1_0 = document.createElement("div")
const code1_1 = document.createElement("pre");
functionDeclarationData =`
                            <h2>function declaration Example</h2>
                            `;


const functionDeclaration =//name reassigned to function declaration

function developerName(name){
    console.log("Developer Name: ", name);
    } ;

document.body.appendChild(code1_0);
code1_0.innerHTML=  functionDeclarationData;
document.body.querySelector("div").appendChild(code1_1)
code1_1.innerHTML=  functionDeclaration;
code1_0.classList.add("module");


// testing console output and function
functionDeclaration("Harsha"); //here developerName is changed
}