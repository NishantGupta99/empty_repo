let hello = "world" ; // if we hover our mouse over the hello word we can see ts is returning a data type as world weher as in js we will get it as string 
hello = "Bangalore" ; // and if we try to reasign the value it will give us an error here on the coding page aswell as the watch mode because we have defined hello as a constant that means we cannot redefine hello but if we replace const with let we can redefine the same. 
let Name :string = " nishant"; // in order to set name as a stirng we will use : after the variable or constant name 
Name = "Pratirath"; // now if we try to reassign the value of firstName as a number or boolean value it will give us error here itself but we can always save it to a string 

const fullName =(name  , surname) => {
    return name + "  " + surname;
} // in a function when we give parameters we have to specify the data type of the parameters aswell to make sure our functions are used in the way they were supposed to be used 

console.log(fullName(34,"nishant")); // right now we have not given any data type to our parameter so we can enter a number or any value maybe a boolean or array etc. 



