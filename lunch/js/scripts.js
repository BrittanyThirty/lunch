
$(document).ready(function(){
  //Default palyer's turn to X
  var turn="X"
  //Array stores values to check for a winner
  var turns=["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  //Default computer turn
  var computerTurn="O";
  //Keep track if it is the computerturn
  var gameOn= false;

  //Change player's turn to X and computer's to 0
  $('turn X').click(function(){
    turn = "0";
    computersTurn="X";
    $("turnX").removeClass("btn-primary");
      $("turnO").addClass("btn-primary");
  });
  function Playerturn(turn, id){
    var spotTaken= $$('#'+id).text();
    if(spotTaken==="#"){
      turns[id]= turn;
      $("#"+id).text(turn);
    }
  }

  //when you tic on the tic class
  $(".tic").click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
   }
});

  //to create and object use curly braces and an optional list of properties
  //DEF a property is a "key:value" pair WHERE key:is a string (aka property name) and :value can be anything
  //-may be helful to think of an object as a cabinet with signed files where each piece of data is stored in it's file by the key (it is easy to find a file by its name or to add or remove afile)
//an empty object can be created using one of two syntaxes (either object constructor or literal:)

// let user = new Object(); // "object constructor syntax"
//let user = {}; // "object literal syntax"

let user = { //an Object
  name: "John", // by key "name" store value "John"
  age: 30 // by key "age" store value 30
};      //get the fields of the object                                  //property values are accessible using the .notation
alert ( user. name ); // John
alert ( user.age ); // 30
                            //the value can be of any type. Below add a boolean one:
user.isAdmin = true;
//to remove a property, we can use the delete operator
delete user.age;
//we can also use mutliword propety names but then tehy must be quoted:
let user =  {
  nameL "John",
  age: 30,
  "likes birds": true // multiword property name must be quoted
};

let user = {
  name: "John",
  age: 30, // aside, the last property in the list may end with a comma; which is called a trailing or hagning comman making it ewasier to add remove or moves around properties because all teh lines become alike
}

//SQUARE brackets- for multiword properties, the dot access is not valid
//the .dot requored the key to ne a valid variale identified. (that is : no spaces and other limitations)
//this would give a syntax erro
user.likes birds =true

let user = {
  //set
  user["likes birds"] = true;

  //get
  alert(user["likes birds"]); //true

  //delete
  delete user["likes birds"]; //NOte the string inside the brackets is properly quoted (any type of quotes are fine)
}

//square bracket nptatopn also provides a way to obtain the property name as the result of any expression- as opposed to a literal string

//Example:

let key = "likes birds";

//same as user["likes birds"] = true
alert( user[key] ); // John (if enter "name")

//COMPUTED properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
  bag[fruit] = 5, // the name of the property is taken from teh varinale fruit
};
alert( bag.apple ); //5 if fruit="apple"
//so if a visitor enters "apple", bag will become {apple:5}

//the above works essentially the samee as the Below

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 //bag.appleComputers = 5
};


//EXISTENCE check
let user = {};
alert( user.noSuchProperty === undefined ); //true means no such property

//ADDITIONAL existence check
"key" in object //example use Below

let user = { name: "John", age: 30 };

alert( "age in user" ); //true, user.age exists
alert( "blabla" in user ); //false user.blabla doesn't exist  //NOTE on the left side of in there must be a property name (which is usually in the form of a string; if we omit quotes that would mean a varianle containing the acutal name to ne tested)

//Omitting quotes changes the meaning and tests for the name being used
let user = { age: 30 };
let key = "age";
alert( key in user ); // true, takes the name from key and checks for such property

//usually the strict comparison "=== underfined:" check works BUT if there is a special case when it fails      "

let obj = {
  test: undefined
};
alert( obj.test ); //it is undefined, so no such property?

alert( "test" in obj ); //true, the property does exists

//the for...in loop

for(key in objecgt) {
  //executes the body for each key amoung object properties
}

//for instance, output all properties of a user as shown below:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user) {
  //keys
  alert( key ); //name, age, isAdmin
  //values for the keys
  alert( user[key] ); // John, is 30, true
};

//An object declared as a const can be changed
For instance:
const user = {
  name: "John"
};

user.age = 25; // (*)

alert(user.age); //25


//CLONING and merging JS

let clone = {}; // the new empty object

//let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
//now clone is fully independant clone
clone.name = "Pete"; // changed the data in it

alert( user.name ); //still John in the original object




//Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

let user = {}; //create an empty object user
user.name = "John"; //add the property name with the value of John
user.surname = "smith"; //add the propety surname with the value Smith
user.name =" Pete"; //chnage the value of the name to Pete;
delete user.name;//remove the property name from the object

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

 Loop over the object and return false immediately if there is at least one property

 function isEmpty(obj) {
   for (let key in obj) {
     return false;
   }
   return true;
 }


  //const protects the varianle iteslef from changing but the content of the object can be changed

  //for Example

  const user = {
    name: "John"
  };

  //works

  user.name = "Pete";

  //error
  user = 123;

  //SUM OBJECT properties assuming:

  let salaries = {
    John: 100,
    Ann: 160;
    Pete: 130
  }
//write the code to sum all salaries and store in the variable SUM

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum); //390

//multiply Numberic

function multiplyNumeric(obj) {
  for (let key in obj)
  if (type of obj [key] == 'number') {
    obj[key] *= 2;
  };

  }
}

ß
