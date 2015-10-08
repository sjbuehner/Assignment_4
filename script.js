/*Practice with JavaScript OOP Concepts*/

/*1.	Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.*/

//var ANIMAL = ANIMAL || ();
//ANIMAL.dog 
//ANIMAL.cat


/*2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.*/

//constructor Syntax
//function Dog ( , ) {}
//Literal Syntax
//var Cat = {}:

/*3.	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.*/

//function Dog ( , ) {}
//var animal = new Dog();

//var Cat = {}:
//var animal = new Cat();

/*4.	Start over and now create a new class using literal syntax called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window. */

//var Animal = {
//    displayInfo:"The Animal has been created",
//             }
//console.log(Animal.displayInfo);

/*5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.*/

//function Animal(){
//    console.log("The Animal has been created");
//}
//var dog = new Animal;

/*6.	Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. */

//function Animal (type, breed, color, height, length){ 
//this._type = type;
//this._breed = breed;
//this._color = color;
//this._height = height;
//this._length = length;
//}
// var dog = new Animal (type = "dog", breed = "collie", color = "brindle", height  = "23\"", length = "42\"");
// console.log(type, breed, color, height, length);

/*7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.*/

//function Animal (type, breed, color, height, length){ 
//this._type = type;
//this._breed = breed;
//this._color = color;
//this._height = height;
//this._length = length;
//}
//var dog = new Animal();
//for (var item in dog){
//    console.log(item);
//}

/*8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.*/

//function Animal (type, breed, color, height, length){ 
//this._type = type;
//this._breed = breed;
//this._color = color;
//this._height = height;
//this._length = length;
//}
//
//Animal.prototype.speak = function (){
//	if (this._type === "dog"){
//	return "The " + this._color + " dog is barking";
//	} else if (this._type === "cat"){
//	return "The " + this._color + " cat is meowing";
//	} else {
//	return "Your animal is not talking right now.";
//	}
//}
//
//var newAnimal = new Animal ("dog", "Doberman", "Black", "24 inches", "28 inches");
//
//console.log(newAnimal.speak());


/*9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”*/

//This doesn't work, but I don't know why.  

//function Animal (type, breed, color, height, length){ 
// var type = type;
// var breed = breed;
// var color = color;
// var height = height;
// var length = length;
//
// var checkType = function(type){
// 	if(type===dog){
//		return dog;
//	} else{
//		return cat;
//	}
// }
//}
//
//this.speak = function (){
//	if (Animal.type === checkType){
//	 return "The " + Animal.type + " has made a noise.";
//	}
//}
//
//var newAnimal = new Animal ("dog", "Doberman", "Black", "24 inches", "28 inches");


/*10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.*/

//Could not solve.
//function findWords(){
//var word = RegExp( /[be]/m);
//	if (word ==="be"){
//	return "Word is found"
//	} else {"Word is not found"}
//	
//}
//	
//findWords(" I  feel certain a lawyer could draft this more elegantly than I could and I would be grateful if any lawyer reading this would draft actual language in the comments section below. If you do I will amend this blog post. But the text I have above will be effective, will work and will end the practice of angel investors preying on entrepreneurs that don’t know any better until after you’ve screwed them.");


/*  Oil Change*/

//var Vehicle = function(make, model, totalMiles, drivenMiles, type, lastOilChange)
//	this._make =  make;
//	this._model = model;
//	this._totalMiles = totalMiles;
//	this._drivenMiles = drivenMiles;
//	this._type = type;
//	this._lastOilChange = lastOilChange;
//
//var drivenMiles = 0;
//var type = "";
//
//Vehicle.prototype.drive = function (miles){
//	this._miles += miles;
//	console.log(totalMiles);
//}
//
//miles(5000);

/*The Recipe Card*/

//var recipe = {
//    "title": "Guacamole",
//    "servings": 4,
//    "ingredients": ["3 Avocados", "1 Lime", "1 tsp Salt", "1/2 cup diced Onion", "3 Tbsp chopped Cilantro", "2 diced Tomatoes", "1 tsp minced garlic", "1 pinch ground Pepper"],
//};
//
//window.console.log(recipe.title);
//window.console.log("Servings: " + ": " + recipe.servings);
//window.console.log("Ingredients:");
//var i;
//for (i = 0; i < recipe.ingredients.length; i++) {
//    window.console.log(recipe.ingredients[i]);
//}


/*books*/

//function Book(title, author, read) {
//    this.title = title;
//    this.author = author;
//    this.read = read;
//}
//
//Book.prototype.toRead = function () {
//       if (this.read === "read") {
//        return 'You already read ' + '"' + this.title + '"' + ' by '  + this.author + '.';
//       } else {
//        return 'You still need to read ' + '"' + this.title + '"' + ' by ' + this.author + '.';
//    }
//};
//
//var bookList = [], i;
//bookList.push(new Book("Look me in the Eye", "John Elder Robinson", "read"));
//bookList.push(new Book("be different", "John Elder Robison", "notread"));
//bookList.push(new Book("A Woman of Independent Means", "Elizabeth Forsythe Hailey", "read"));
//bookList.push(new Book("The Mime Book", "Claude Kipnis", "read"));
//bookList.push(new Book("Longbourn", "Jo Baker", "notread"));
//    
//for (i = 0; i < bookList.length; i++) {
//    window.console.log(bookList[i].toRead());
//}
