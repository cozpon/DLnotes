
/////////////////////////////////// Dev League DAY one ///////////////////////////////////

"node -v" === node is the command, -v is the flag or switch
index.js                        cli = command line argument

Context: subject matter of "this". Whenever you say "this" we're talking about javascript
- Self Teaching, will be put into positions where have to self teach. Identify how best you
learn/teach yourself.
- Knowing About, hear about a language or a concept or something, and you go home and study about it.
- Ability to TEACH, the next level, understanding level where you can teach it to someone else.
- GROK, word from Strangers in a Strange Land, you learn something so much it becomes a part of you:
'you drink water and it becomes you'. You need to grok certain things in programming. Use it every day.
- Immersion: Watch youtube videos, listen to podcasts (), 11 hours is good, but live, breath, code.
---------------
DAILY SCHEDULE: 9-10am: Morning Challenge - 10-10:30 Standup/Scrum - 10:30-12:30pm: Lecture/JAM
12:30-1:30pm: Lunch - 1:30-5pm Lecture/JAM - 5-6pm: Dinner - 6-8pm: JAM.
---------------

Lecture Topics: SCOPE & HOISTING & CLOSURES

SCOPE: is how accessible/where/how visible it is (a variable, etc) (Local Scope, Global Scope, etc)
  Scope is always visible upwards (or outwards).

HOISTING: is variable declarations moving to the top.
* Where you delcare a variable matters:
-- function declaration gets hoisted.
-- function expression DOES NOT get hoisted.
-- FUNCTIONS get hoisted and VARIABLES get hosited.
-- DECLARATION gets hoisted, assignment does not get hoisted.

CLOSURES:
Function inside of a function. The outer function will hold the function.
Maintains or perserves a variable and stores it for later use, also allows for privacy in javascript.
Closures allow for privacy by creating a private scope (function within a function).
By writing code that allows validation or makes other progammers follow your rules (within your scope)
you can create a little bit of privacy/rules around your code. "gatekeeping your variables";
Revealing Module Pattern: returns an object that exposes an API, allowing someone to take your object/info
and do something with it outside of your private scope.
IIFE - Immediately Invoked Function Expression: allows us to create a function and immediately call it,
returning the object from the private scope into something more visible.

In a variable, only the declaration gets hoisted.
For example:
y = 20;
var y = 0;

The var y gets hoisted up, making it 20, but as the program runs down it immediately sets its value to 0.
A function will run, but then pick up right back where it began. Not start the whole program over.

A function declaration has to have a name, that way after you delcare them you can grasp them.
Anonymous functions have to be used function expression, if you're using it right away,
otherwise you'd create it and then it's gone.
HOISTING is important for reading people's code and understanding how the code runs and debugging.

MVP = Minimal Viable Product // polished proof of concept.

The core tenant of a RMP (Revealing Module Pattern) is that it returns an object.
For example, if you call the calculator.js file, you can't access total or memory, only the functions.
Like a "view only" type of code, provides a bit of privacy.

Injection Attack - hacks into your eval() code. So don't use eval()

about:blank ---- in your webrowser pops up a nice clean slate for you to play around with webconsole.

















/////////////////////////////////////////// DAY two /////////////////////////////////////////

Switch Case is an alternative to Nested If statements.
Example for finding the sum of a multiple of 3 and 5 for any number passed.

sumOfAMultiple = function(n){
  var sum = 0
  for (var i = 0; i < n; i++) {
    switch (true) {
      case (i % 5 === 0):
      case (i % 3 === 0):
      sum += 1;
      break;
    }
  }
return sum;
};

(we worked on Pixel Painter all day)















/////////////////////////////////////////// DAY three /////////////////////////////////////////

Fibonacci Numbers
sum of previous two numbers


0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 5 + 3 = 8, 8 + 5 = 13, 13 + 8 = 21


given 10, only generate Fibonacci numbers 1 2 3 5 8 (up to 10)
then take even numbers out, and sum those together

ANSWER TO Fibonacci Sequence using DO // WHILE loops

function: _sumFibs( maxFibValue ) {
  var sum = 0;
  var first = 0;
  var second = 1;
  var current = 0;

  // define your base case, validate your input
  do {
    current = first + second; // figure out the next fibonacci number
    first = second; // update the value at first
    second = current; // update the value at second

    if (current % 2 === 0) {     // if "current" is even, add it to sum;
      sum += current;
      }
  }
  while (current < maxFibValue);

  return sum;
}


///// BONUS ROUND (return the highest fib number)

function: _highestFibonacciNumber( maxFibValue ) {
  var highest = 0;
  var first = 0;
  var second = 1;
  var current = 0;

  while (current < maxFibValue) {
    current = first + second; // figure out next fibonacci number
    first = second; // update the value at first
    second = current // update the value at second.
    if(current < maxFibValue) {
      highest = current;
    }
  }
  return highest;
};

// loops through Fib numbers until the last number, and returns highest/current.


WHILE loops are good if you KNOW the end condition.
Do T H I S "WHILE" you know the condition.

Do/While loops are used when you know you want to run a function at least ONCE.

while( //as long as this is true ){
  ....... //this is going to run
}
For example, if you're downloading something and want to display the download percentage,
a while loop can be set to stop when the percentage hits 100 and be used to constantly loop/check
the status of the download, returning an updated percentage number until it hits 100 and breaks.


///////////////////// SAME FUNCTIONALITY of WHILE loops and FOR loops. Both go 0 to 99.
function test() {
  var counter = 0; // set initial condition outside While loop

  while(counter < 100) {
    console.log(counter);
    counter++;
  }

_______________________________________________

  for(var i = 0; i < 100; i++){
    console.log(i);
  }
}



*~ While Loops don't deal with a counter, they deal with truthy statements.
While something is truthy, keep doing something, until something appears and makes it false. Etc.

var connection = null;
while(!connection){
  connection = connectToDatabase();
}

You can also stop the loop in two ways, if it reaches a connection, or if it tries 10 times.
var counter = 0;
var connection = null;
while(!connection || counter < 10){
  counter++;
  connection = connectToDatabase(); // returns either null or object.
}



//////////////////////////// PixelPainter notes

Narrow the functions down so you don't need to look inside the function in order to know what it does.
createPixelPainter(){
  createColorSwatches();
  createCanvas();
  addLIsteners();
}

etc.

Build your function around what is being passed into it.
QuerySelectorAll is faster

///// DEBUGGING USING THE GOOGLE CHROME BROWSER
Inspector // Sources
Can set up breakpoints in your code.
The way you set it, is by actually clicking on the "gutter" (the number next to your code line);
If you set a breakpoint and run code, it runs and lets you know what is involved.

debugger; allows you to add a breakpoint in your code, a physical breakpoint. pauses your system so
you can make evaluations. (never COMMIT with debugger in code)

///// CLOSURES  devleague.slides.com/devleague/closures/
They are a way to maintain a variable after the execution of the function that variable is delcared in has passed
Also used for hiding the scope from other people being able to see the inner-workings.
Global variables are on the global scope. They are alive during the entire runtime of the application.
Variables declared inside the scope of a function, are only alive
when the function is ran, after that it is garrbage collected

Closures are created when variables are accessed outside of the immediate scope.

USING CLOSURE TO GET MATH POWER: ////////////////////////////////////////

function austinPowers(exponent) {
  return function(base) {
    var result = 1;
    for(var i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  };
}
var babyPowers = austinPowers(2);
console.log(babyPowers(5));
console.log(babyPowers(7));

////// ////////// another example using math.POW //////////////////////

var power = function(exponent){
  return function(base){                    (This is a function declaration, when it is invoked)
    return Math.pow(base, exponent);
  };
};
var powTwo = power(2);                      (This variable is holding the function expression)
console.log(powTwo(4));  // 16              (This is the actual function execution, invoking above function)











////////////////////////////////////////// DAY four ////////////////////////////////////////////////////

A METHOD is a function that is on an object.
A module pattern returns an object.
So if you invoke a method that is contained within that object, you are invoking a method that is just a function

---------------------------------
******* PASS BY VALUE ***********

var numOne = 5;
var numTwo = numOne;
numTwo // 5
numOne = 10
numTwo // 5
numOne // 10

  When a value is stored into a new variable, it reads the value and stores it in its own storage. If the original
  value changes, it doesn't care, it's already stored the value.

                                    https://blog.penjee.com/passing-by-value-vs-by-reference-java-graphical/
-----------------------------------
******* PASS BY REFERENCE ********

originalObj = {name: "Ricky"}
obj2 = originalObj
obj2 // {name: "Ricky"}
originalObj === obj2 // true

obj3 = obj2
obj3 === originalObj // true

originalObj.name = "Ed"
obj2 // {name: "Ed"}

obj3.name = "Nakaz"
originalObj // {name: "Nakaz"}

  It's looking back at the reference of the object, not setting its own value.
  You are resetting each memory object when you rename it.
  Variables are just POINTERS, they contain NOTHING. They just point to something.
  You can have multiply variables pointing to the same memory, they contain nothing.
  There is only one name stored in the system, but multiple variables can point towards it.

obj2 = null;
obj2 // null
obj3 // (name: "Nakaz")

  By null-ing obj2 you are replacing the memory object from obj2 to point towards null instead of original object.
  The other objects are not getting effected by that.

obj3 = 5
obj3 // 5
originalObj // {name: "Nakaz"}

  Replacing obj3's pointer with a primitive, you aren't effecting the memory, simply changing the pointer that obj3
  has, not effecting the originalObj pointer or memory.

Keep in mind while coding, "Am I passing something as a value? Or am I passing it as a reference".

function ai (instructor) {
  instructor.name = "jon";
  return instructor;
}
ai(originalObj) // {name: "jon"}

  It is mutating the originalObj through a function.
**** ONLY PRIMITIVES CAN BE PASSED BY VALUE, objects are passed by reference ****
  Variables are what allow us to reference something in the future.


__________________________________________________________________________________________________________________

Datatypes || DataStructures: (knowabout)
array     map/dict(ionary)      stack      queue       linklist

Arrays have index's. So grabbing the 5th thing inside an array is simple. Stack and Queue aren't as easily accessible.
[0, 1, 2, 3, 4]

Map/Dictionary [key: val, key val, key val].. Map looks like an object, there's only minor differences between them.

Stack follows LIFO (last in, first out), if you put something on the stack, it's added to the top, if you take something
off the stack, it's removed from the top. * It's a temporary holding place. Very fast to add things to it, and remove things.

Queue follows FIFO (first in, first out), aka Standing in line. (What the British call standing in line... queueing).
Very efficient to add something to the queue get something out of the queue.

LinkList is a series of "nodes". Each node, like stack and queue, contains data. What makes LinkList unique is that it has
something called "next". And Next points to the next data node in the system.
It's made up of nodes that know about eachother. It is very fast to insert into a linklist, fast to delete. Memory efficient.
You have to start at the head of a LinkList and travel through to the tail. The tail is when the node hits null.
LinkLists are just objects, each node has a memory address. It is very efficient but you cannot access the data like an array.
You have to start at the top and go down, rather than with an Array you can grab from the middle, or the front, or the end. Etc.
Deals with sequentially related data.

A Linked List is a data structure we create contains a list of NODES that are linked with code we write to link to them.
a NODE is an OBJECT that holds at most 2 pieces of information. Data Value and Next node it points to in the list.
    data: "Turkey Sandwich",
    next: {
            data: "Meatballs",
            next: null
         }   // this is really a reference to a memory

Linked List example:

var order1 = {data: "Taco", next: order2};
var order2 = {data: "Burrito", next: order3};
var order3 = {data: "Enchilada", next: null};

One object holds a reference to another object
Or: One node holds a pointer to the next node in order

We use a linked list when we don't know what size something is going to be, but can anticipate something will grow fairly large.
Order preservation is important AND order is anticipated to change over time.
Don't waste your time setting up a Link List for small things. Arrays are used for small things.
In a Single Linked List, each node knows about the next node, but not the previous.

To add a node: Add a new node to the current tail (pointed toward Null), update current tail's next to the new added node.

To insert a node: find the position in your LL where to insert, update next property of new node to point to the node. Update the "next" property of the node you want to insert after to point towards the new node. *** Change the reference to include new NODE.

Finding a node: Go through nodes, check if node's value matches what you want, if so, return that node, if not, move onto next node via the node's "next" property. Continue on until the Node's "next" property is null.

Delete a node: Find the node you want, and keep track of previous node. When found, update prevous node's "next" to point to the node AFTER the one you want to remove.














/////////////////////////////////////////// DAY five /////////////////////////////////////////

LINK LIST review:
Link List is a function that utilizes the revealing module pattern, so at the bottom of the function returns the objects.

______________________________________*******SORTING ALGORITHMS******______________________
                            http://devleague.slides.com/devleague/big-o/live#/

Big-O Notation: understanding the complexity of an algorithm. (Bay Area interviews ask you big - o questions)
Used to describe the performance or complexity of an algorithm. Specifically describes the WORST-CASE scenario.
Used to describe the execution TIME required or the SPACE (memory) used by an algorithm.
We want O(1). One time for all the inputs.

Algorithm's Scale:

O(1), constant complexity.
O(1) describes an algorithm that will always execute in the same time regardless of the size of the input data set.
For example, accessing any single element in an arary takes CONSTANT time, since only one operation is needed to locate it.

Example of O(1):
var arr = [ 'accessing', 'an', 'array', 'element', 'takes', 'constant', 'time']
var index = arr[4] // return 'takes'
Takes same amount of time regardless of array size.


O(n) Linear Complexity: O(n) describes an algorithm whose performance will grow linearly and in direct proprtion to size of
input data set.
It will take as much time as the amount of inputs.
A for loop for example, if you had an array of 5,000, and you want the 4,999th item, you would have to iterate through the array 4,999 times.

O(n^2) Quadratic Time: represents an algorithm whose performance is directly proportional to the square of the size of the input data set.
For example: a FOR loop within a FOR loop.

O(2^n) Exponential Time: for every process it spawns a recursive(2 or more processess of itself) process of itself. For every process it spawns 2 processess of itself.
An example of this is trying to break a password by testing every possible combination
(assuming numerical password of length N). This results in O(10^N) complexity.
Recursion = when a function calls upon itself, however many times it needs.

O(log n) Logarithmic Time: Algorithms taking logarithmic time are commonly found in operations on binary trees, or when using a binary search. Log n would get as close as N as possible, but not ever touching N. If N is a for loop, you can skip every 2 or 3 For loop if everything is sorted.
("If this number is 2 less than N, you can skip 2 each time") --> (instead of 1, 2, 3, 4, 5, 6) it is (2, 4, 6)
* Slow in the beginning, but consistent in the long run *

https://stackoverflow.com/questions/487258/plain-english-explanation-of-big-o
https://en.wikipedia.org/wiki/Big_O_notation
https://en.wikipedia.org/wiki/Time_complexity
http://bigocheatsheet.com/



/////////////////////////////////////////// DAY six /////////////////////////////////////////


Making Arrays more Functional:
Mutator Methods = those that change the structure/state of an Array

Accessor Methods = those that access contents of Array without changing it

Iterator Methods = these methods iterate over the array.
Examples:
forEach(callback[, arg])
It calls a function you provide for each element in the Array. Your callback function takes in 3 parameters:
Element - the current element being iterated over
Index - the current index of the element in the array
Array - the array itself being traversed

every(callback[, arg])
Returns true if every element in the Array passes the test you provide.
Your callback function takes 3 params: Element, Index, Array.

    function isNumeric(element, index, array) {       <-- checks if every item passed in is true (every element in Array is a number)
        return !isNaN(parseInt(element));
    }

    var myArray = [3, 'taco', false, 'Wonka'];        <-- once it realizes "taco" isn't a number, it will stop iterating and return false

    myArray.every(isNumeric); //return false

    var myOtherArray = [3, 5, 6, 9];

    myArray.every(isNumeric); //return true


some(callback[, arg])
Returns true of ANY element in the Array passes the test you provide.
Returns immedaitely when first TRUE is found
(Opposite of EVERY) (It will not tell you which is a number, or how many are numbers.)



filter(callback[,arg])
Creates and returns a new array with all elements that pass TRUE test.
Similar to EVERY except that it will run through all of them, and any that pass TEST will get FILTERED out and you will create a new array.

    function getNumberz(element, index, array) {
        return !isNaN(parseInt(element));
    }

    var myArray = [3, 'taco', false, 44, 'Wonka'];

    myArray.filter(getNumberz); //return [3, 44]                  <--- picked out NUMBERS (ones that returned TRUE)

    console.log(myArray); //[3, 'taco', false, 44, 'Wonka']

    var myOtherArray = ['test', 'taco', 'hotdog', {}];            <--- array of ones that returned FALSE

    myOtherArray.filter(getNumberz); //return []

    console.log(myOtherArray); //['test', 'taco', 'hotdog', {}]



map(callback[, arg])
Creates/returns a new array with all returned values from callback function
It does NOT mutate the original array

    function tripleIt(element, index, array) {
        return element * 3;
    }

    var myArray = [3, 12, 1, 9];

    myArray.map(tripleIt); //return [9, 36, 3, 27]               <--- map always returns a new array, does not modify original array

    console.log(myArray) //[3, 12, 1, 9]

    var myOtherArray = [3, 12, 1, 'taco'];

    myOtherArray.map(tripleIt); //return [9, 36, 3, NaN]         <--- if operation does not make sense, like "taco" not being a number..
                                                                      It will fail.
    console.log(myArray) //[3, 12, 1, 'taco'



reduce(callback[,initalValue])                                                **********************
Returns a single value accumulated against all values from callback function
Your callback function takes 4 params and 1 optional param:
PreviousValue, CurrentValue, Index, Array.
If you pass NO optional param, first iteration is at index 1 so that previous/next have values
It will go through
reduce() does NOT mutate the original array

    function summarize(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    }
                                            // because no optional param was included, it starts at index[1]
    var myArray = [3, 12, 1, 9];             --> [3  +  12]         [15]   -->  [15 + 1]    --> [16] --> [16 + 9] = 25
                                             (prev) + (current)  (new prev)  (prev) (cur)   (new prev)
    myArray.reduce(summarize); //return 25

    console.log(myArray) //[3, 12, 1, 9]

    //Start at a certain initial value
    myArray.reduce(summarize, 10); //return 35

    console.log(myArray) //[3, 12, 1, 9]



reduceRight(callback[,initialValue])
Same thing as REDUCE just starts from the right of the array.

var arr = [3, 2, 1];

arr.reduceRight(function(previous, current) {
  return previous + current;
  }, " ");
}
returns // 3 2 1
