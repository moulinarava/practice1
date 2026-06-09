//functios is a block of code which return some value

function add(a,b){  //->a,b are called parameters
    console.log(a+b)
    
}
add(1,2)//->this will called aruguments

//function decelration - function functionname(){}
//function expression - 1.named function 2.anonymous function 3.arrow function

//default parameters iving valur for a variable in paramter without using arugument

// nan - not a number
//arguments having hive proority than parameters
function hello(a=0,b=0){ //-> here a=0 and b=0 are default parameters
    console.log(a+b)
}
hello(2,5)->// these aruguments  have high prority than parameters

//varying in number of parameters and arguments
function varying(a,b){
    console.log(a,b)

}
varying(1,2,3)
//o/p will be 1,2

function varyingg(a,b,c,d){
    console.log(a,b,c,d)
}
varyingg(1,2,3)//o/p is 1,2,3,undefined

