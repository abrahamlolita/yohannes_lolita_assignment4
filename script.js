//Lolita Yohannes
//COMM 644 - Assignement 4
//
//Practice with JavaScript OOP Concepts (20 points)
//STEP 1
//var ANIMAL = ANIMAL || {};
//    ANIMAL.Cat = function() {
//}
//    ANIMAL.Dog = function() {		
//}

//STEP 2
//    function Cat() {
//}
//    var Dog = function() {
//}

//STEP 3
//var theDog = new Dog();

//STEP 4
//var Animal = function () {
//        "use strict";
//        window.console.log("The Animal has been created");
//    }
//var cat = new Animal();

//STEP 5
//var Animal = function(color) {
//        "use strict";
//        window.console.log(color);
//}
//var cat = new Animal("The Animal has been created");

//STEP 6
//var Animal = function (type, breed, color, height, length) {
//        "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//var dog = new Animal("dog", "boxer", "white", 24, 40);

//STEP 7
//var Animal = function (type, breed, color, height, length) {
//        "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//var dog = new Animal("dog", "boxer", "white", 24, 40);
//for (var i in dog) {
//			console.log(i + " : " + dog[i]);
//		}

//STEP 8
//var Animal = function (type, breed, color, height, length) {
//        "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//Animal.prototype.speak = function() {
//			if (this.type == "dog") {
//				return "The " + this.color + " dog is barking!";
//			} else {
//				return "The " + this.color + " cat is meowing!";
//			}
//		}
//var dog = new Animal("dog", "boxer", "white", 24, 40);
//window.alert(dog.speak());

//STEP 9
//var Animal = function(type, breed, color, height, length) {
//        "use strict";
//			var type = type;
//			var breed = breed;
//			var color = color;
//			var height = height;
//			var length = length;
//			var checkType = function() {
//				if (type == "dog") {
//					return "dog";
//				} else {
//					return "cat";
//				}
//			}
//			this.speak = function() {
//				return checkType();
//			}
//		}
//var animal = new Animal("cat", "ragdoll", "chocolate", 11, 20);
//window.console.log("The " + animal.speak() + " has made a noise!");

//STEP 10
//String.prototype.findWords = function(word) {
//    "use strict";
//            var wordInstance;
//			var hits = [];
//            var result = 0;
//			hits = this.split(" ");
//			for (wordInstance = 0; wordInstance < hits.length; wordInstance++) {
//				if (hits[wordInstance] == word) {
//				result += 1;
//				}
//			}
//			return result;
//		}
//		var paragraph = "Methods follow the same logic as properties; the difference is that they are functions and they are defined as functions with a slight syntactical difference. Calling a method is similar to accessing a property, but you add()at the end of the method name (with optional arguments). To define a method, assign a function to a named property of the class'sprototypeproperty; the name that the function is assigned to is the name that the method is called by on the object. In the example below we define and use the methoddisplayMake()for theCarclass.";
//		window.alert(paragraph.findWords("method"));

//The Recipe Card (15 points)	
//   var FavRecipe = {
//        Title: "Tiramisu",
//        Prep: "Prep time: 35 min",
//        Ready_in: "Ready in 5 hrs",
//        Level: "Level: Easy",
//        Serves: 8,
//        ingredients: ["8 large egg yolks", 
//                      "3/4 cup sugar", 
//                      "1 1/4 cups heavy cream", 
//                      "3 tablespoons Kahlúa/Rum",
//                      "1/2 teaspoon vanilla extract",
//                      "1 cup Marsala wine",
//                      "Four 8-ounce containers mascarpone cheese, at room temperature", 
//                      "1 1/2 cups espresso or strong coffee, at room temperature", 
//                      "30 to 32 Italian ladyfingers (savoiardi)", 
//                      "1/4 cup Dutch-process cocoa powder", 
//                      "Bittersweet chocolate shavings"],
//        recipeCard: function() {
//                "use strict";
//            var i;
//            window.console.log(FavRecipe.Title);
//            window.console.log(FavRecipe.Prep);
//            window.console.log(FavRecipe.Ready_in);
//            window.console.log(FavRecipe.Level);
//            window.console.log("Yields:" + " " + FavRecipe.Serves);
//            window.console.log("Ingredients:");
//            for (i in FavRecipe.ingredients) {
//                window.console.log("- " + FavRecipe.ingredients[i]);
//            }
//        }
//    };
//    FavRecipe.recipeCard();
   
//The Reading List (15 points)
//var i;
//var readingList;
//var Book = function(title, author, alreadyRead) {
//              "use strict";
//            this.title = title;
//            this.author = author;
//            this.alreadyRead = alreadyRead;
//};
//readingList = [new Book("Purpose Driven Life", "Rick Warren", true),
//               new Book("Relentless", "John Bevere", false),
//               new Book("The Pillars of the Earth", "Ken Follett", true),
//               new Book("Radical", "David Platt", false),
//               new Book("The Runaway Jury", "John Grisham", true),
//               new Book("The Alchemist", "Paulo Coelho", true ),
//               new Book("The Invitational Life", "Steve Carter", false)];
//for (i = 0; i < readingList.length; i++){   
//    if (readingList[i].alreadyRead) {  
//      window.console.log("You already read \"" + readingList[i].title + "\" by " + readingList[i].author);  
//    } else {  
//     window.console.log("You still need to read \"" + readingList[i].title + "\" by " + readingList[i].author);  
//    }  
//   } 
//
