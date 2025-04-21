const developerName = "Sai Sri Harsha Pemmasani"    // declaring and initializing developer name and is declared using constant as it is unmutable



/*
    line 6 to 28 are to set footer code 
    ------------------------------------
    >>>>>>>>>>>>>Ignore the code in between<<<<<<<<<<<<<<<<<
    ------------------------------------
*/
// {
// const footDataContent = `

//                             <h3>  
//                             <center>    
//                             @${developerName}
//                             </center>
//                             </h3>

//                         `

// const footData = document.querySelector("footer");
// // footData.classList.add("footData");
// // footData.setAttribute("id","footData");
// footData.innerHTML = footDataContent;
// footData.style.marginTop="85vh";

// }

console.log("---------------------------------var explination------------------------------------------------------");

{

/*
    >>>>var <<<<

    Old school

    *=>  is a global scope variable or object [like window or function]

    gives a functional scope                                        -> 1
    can be redeclared and reassigned within same scope              ->2
    if not initialized the value is undefined                       -> 3
*/




const varDataFunc = ()=>{
    {
        console.log("Even before declaration\n","type of varInsideFB: ",typeof(varInSideFB),"and value is:",varInSideFB); // returns undefined no error continues code execution
    var varInSideFB;
    console.log("type of varInsideFB: ",typeof(varInSideFB),"and value is:",varInSideFB);
    varInSideFB = "Can you see me";

    {
        console.log(varInSideFB); // proving 1
        varInSideFB = "if you saw this you saw me earlier";
        console.log(varInSideFB); // proving 1
        var varInSideFB = "I got redeclared and reinitated" ; // proving 2
        console.log(varInSideFB);
    }
    console.log("I am back to main function can i use variable ",varInSideFB);
    }
    
    console.log("type of varInsideFB: ",typeof(varInSideFB));

}
varDataFunc()

/*
if i removed the function declaration and uncomment the line below it works as then the variable is considered as method or document scope
for now we declared the whole block as a function so f we uncomment the line below it throws an error saying varInsideFB is not defined.

*/

// console.log("i am outside the block scope: ",varInSideFB); 


console.log("---------------------------------------------------------------------------------------");

}


console.log("---------------------------------let explination------------------------------------------------------");


{
    
/*
let exists in a block scope it doestnt care about function and method as long as its in its block it is considered.

it can be reassigned and redeclared.

This is a modern way of declaration.
throws an reference error if used before





*/
    
    // console.log("type of letVariable: ", typeof(letVariable),"value inside is: ", letVariable);  // throws an error for reference
    let letVariable ;
    console.log("type of letVariable: ",typeof(letVariable),"value inside is: ", letVariable);

    letVariable = "i am a string";

    console.log(letVariable);
    
    letVariable = 5;
    var func = function(){
        letVariable++;
        console.log("inside function value: (post increment)",letVariable);
        letVariable--;
    }
    func();
    console.log(letVariable);

    letVariable = true;

    console.log(letVariable);

// cannot use before declaration
    // console.log(letVariable);



    console.log("---------------------------------------------------------------------------------------");

}



console.log("---------------------------------const explination------------------------------------------------------");


{
    //const simillar to var but immutable , block scoped and must be initialized

    // console.log("immutable value: ",immutable);
    const immutable = "i am string";
    console.log("immutable value: ",immutable);

    // immutable = 5; // is a string cannot change property
    // immutable = "changed" // throws an error as it changes value for a constant variable

        const immutableObject ={
            name : "harsha",
            age: 5

        }

        immutableObject.name =5; // here name cannot be changed.
        console.log(immutableObject);
        //  immutableObject = 5; // throws an error so data cannot be changed outof no where to a different value 

        // but cannot change immutableObject so we can use const for declaring types that we cannot change objects accidently to completey diiferent thing

        var mutableObject ={
            name : "harsha",
            age: 5
        }
        

        mutableObject.name =5; // here name cannot be changed.
        console.log(mutableObject);
        mutableObject = 6 ;
        console.log(mutableObject); // value changed to entirely differnt thing without any warning

        // but cannot change immutableObject so we can use const for declaring types that we cannot change objects accidently to completey diiferent thing
        
console.log("---------------------------------------------------------------------------------------");

}





