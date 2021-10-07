// so now we have used the reserved keyword of ts that is interface in which we define the data types for the variables and make sure the name of the interface starts with a capital letter 
// if we want any entity in the interface not be mandatory we will use ? after the entity name
var user = {
    name: "Nishant",
    age: 35
}; // if we hover over user we can see that ts understands that the data we entered for name is string and for age its a int
var user2 = {
    name: "Pratirath"
}; // but for some reason if i for get to add age for a second object named user 2 ts is nto going to warn me so although i can write data type in every object like {name:string , age: number} so now when we see ts is twlling us that age is missing from user 2  but copying it and pasting it with every object is a lot of work hence we use intefaces  
// now instead of the entire thing we can just say user 2 belongs to a User interface and it should expect name and age with there respective parameters 
