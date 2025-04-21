// script that runs html content
// Function Declaration
{
  // function declaration
const code1_0 = document.createElement("div")
const code1_1 = document.createElement("pre");
functionDeclarationData =`
                            <h2>Function declaration Example</h2>
                            <p>
                            Usually function declaration is used with a keyword  " function " keyword followed by =>  function Name and parameters covered in circular braces followed by curly brackets within where code to the function is stored and ends with a semicolon. 
                            </p>
                            `;


const developerName =//name reassigned to function declaration

function developerName(name){
    console.log("Developer Name: ", name);
    } ;

document.body.appendChild(code1_0);
code1_0.innerHTML=  functionDeclarationData;
document.body.querySelector("div").appendChild(code1_1)
code1_1.innerHTML=  developerName;
code1_0.classList.add("module");


// testing console output and function
developerName("Harsha"); //here developerName is changed
}
//function expression
{
  const code2_0 = document.createElement("div")
  const code2_1 = document.createElement("pre");
  data =`
                              <h2>function Expression Example</h2>
                              <p> Function expresssion is a way to use functions where instead of using function keyword to declare name we assign a function to a variable and aces the function using that variable.
                              `;
  
  
  const functionExpression = function(name){
    output = "Developer Name: " + name;
    console.log(output);
  }
  functionExpression("Gol D Rogers");


  document.body.appendChild(code2_0);
  code2_0.innerHTML=  data;
  code2_0.appendChild(code2_1)
  code2_1.innerHTML=  functionExpression;
  code2_0.classList.add("module");
}
//arrow function

{
  const code3_0 = document.createElement("div")
  const code3_1 = document.createElement("pre");
  data =`
                              <h2>Arrow function Example</h2>
                              <p>Arrow function are simmillar to function expressions where we use " =>" to pass parameters to a block and assign it to a variabke instead of using a function keyword. </p>
                              `;
  
  
  const arrowFunction = (name) => {
    output = "Developer Name: " + name;
    console.log(output);
  }
 arrowFunction("Figarland Shanks");


  document.body.appendChild(code3_0);
  code3_0.innerHTML=  data;
  code3_0.appendChild(code3_1)
  code3_1.innerHTML=  arrowFunction;
  code3_0.classList.add("module");
}

//function constructors 
{
  const code4_0 = document.createElement("div")
  const code4_1 = document.createElement("pre");
  data =`
                              <h2>Constructor function Example</h2>
                              <p>Constructor function is simillar to constructor concrpt for methods which we will discuss later.</p>
                              <p> Function is a global constructor, like Array, Object, or Date.This dynamically creates a new function with parameter name, and a body that returns their processed output</p>
                              <p>it's created dynamically at runtime. Pretty powerful, but also dangerous if you're dealing with user input (can lead to security issues like code injection)</p>
                              `;
  
  
  const constructors = new Function( 'name', 'return "Developer Name" + name');
  console.log(constructors("Monkey D LUffy"));


  document.body.appendChild(code4_0);
  code4_0.innerHTML=  data;
  code4_0.appendChild(code4_1)
  code4_1.innerHTML=  constructors;
  code4_0.classList.add("module");
}

//callback functions
{
const code5_0 = document.createElement("div")
  const code5_1 = document.createElement("pre");
  data =`
                              <h2>Callback function Example</h2>
                              <p>These are the functions that pass functions as parameters.</p>
                              <p> Function is a global constructor, like Array, Object, or Date.This dynamically creates a new function with parameter name, and a body that returns their processed output</p>
                              `;
  
  
  const parameterFunction = (name,kingName) =>  {
      console.log(name," is very loyal to our future pirate king, ",kingName)
  }

  const mainFunction =(name,parameterFunction)  =>  {
    pirateKing = "Monkey D Luffy";
    console.log(name, "he plays an important role in Luffy's crew")
    parameterFunction(name,pirateKing);
  }

  mainFunction("Roronora Zoro",parameterFunction);


  document.body.appendChild(code5_0);
  code5_0.innerHTML=  data;
  code5_0.appendChild(code5_1)
  code5_1.innerHTML= "parameterFunction = " + parameterFunction +"\n\n" +"mainFunction = " +mainFunction;
  code5_0.classList.add("module");
}

//high order functions
{
  const code6_0 = document.createElement("div")
    const code6_1 = document.createElement("pre");
    data =`
                                <h2>High Order function Example</h2>
                                <p>These are the functions that returns functions .</p>
                                 `;
    
    


    const mainFunction =(name)=>{
      console.log("There is a guy named ",name);
      return (obsession)=>{
        console.log(name," He is so obsessed with ", obsession, " at this point he loses him self when he see ",obsession," arround him");
    }
    }


    returnFunction = mainFunction("Sanji VinSmoke")
    returnFunction("girls")
    
  
  
    document.body.appendChild(code6_0);
    code6_0.innerHTML=  data;
    code6_0.appendChild(code6_1)
    code6_1.innerHTML="mainFunction = " +mainFunction;
    code6_0.classList.add("module");
  }


  
  