// 01

var fruits = ["mango","lemon","blueberry"]
console.log(fruits)
console.table(fruits)

// 02 Access

var ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1])

// 03 Add and Remove

var objects = ["pen", "book", "lamp"]
objects.unshift("chair")
console.log(objects)

objects.pop()
console.log(objects)

objects.push("laptop")
console.log(objects)

objects.shift()
console.log(objects)

// Order

var number = [4, 10, 8, 12, 6]
console.log(number.reverse())

// 05 Boucle

var total = 0
var limit = 10

for( var i = 0 ; i <= limit; i++ ){
total = total + i
}
console.log("variable totale : ",total)  // variable totale


// 06 Reverse

var sentence = "Hello Konexio !"

for( i = 15; i >= 0; i--){
    console.log(sentence[i])
}

// Bonus

for(var i = 0; i <= 100; i ++) {
    if( i % 3 === 0 && i % 5 === 0) {
        console.log(i, "fizzbuzz")
    } else if( i % 3 === 0 ) {
        console.log(i, "fizz")
    } else if( i % 3 === 0 ) {
        console.log(i, "buzz")
    } else if( i % 7 === 0) {
        console.log("")
    }
}

// Bonus II

var total = 0
var limit = 10
var counter = 0

while( counter <= limit ) {
    total += counter
    counter ++
}

console.log(total)

// Bonus III

var students = ["Alin", "Eloi", "Jong", "Ahmed", "Salwa", "Karimou", "Kevin"]

var random = Math.floor( Math.random() * students.length)

var randomStudents = students[random]

console.log(randomStudents)

// Bonus IV

var emptyArray = []
var min = 0
var max = 100

for( var i = 0; i < 20; i++ ) {
    var random = Math.floor(Math.random() * (max - min +1)) + min
    emptyArray.push(random)
}

console.log(emptyArray)

var iMax = 0

for( var i = 0; i < emptyArray.length; i++ ) {

    if( emptyArray[i] > iMax ) {
        iMax = emptyArray[i]
    } 
}
console.log(iMax)

// A chaque incremnentation, je veux pousser dans emptyArray, un nombre aléatoire compris entre 0 et 100