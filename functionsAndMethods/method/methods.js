// function this belongs to this file level
parameter2="golf"
function func(parameter1,parameter2){
    console.log(parameter1 , " plays ",this.parameter2)
}
console.log('func("ramu","cricket")');
func("ramu","cricket");

// method


const object ={
    parameter1 :"ramu",
    parameter2:"cricket",

    func: function (parameter1,parameter2){
        console.log(this.parameter1 , " plays ",this.parameter2)
    }
}
console.log('object.func()');
object.func();