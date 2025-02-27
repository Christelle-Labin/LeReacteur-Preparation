//const vegetable1 = "carrot"
//const vegetable2 = "broccoli"
//const vegetable3 = "pepper"
//const vegetable4 = "cabbage"
//const vegetable5 = "zucchini"
//const vegetable6 = "onion"
//const vegetable7 = "salad"
//const vegetable8 = "cauliflower";

const vegetables = [
    "carrot",
    "broccoli",
    "pepper",
    "cabbage",
    "zucchini",
    "onion",
    "salad",
    "cauliflower",
];

console.log(vegetables[0]); // affichera carrot
console.log(vegetables[7]); // affichera cauliflower

vegetables [8] = "leek";
console.log(vegetables);

const data = [3, "vegetables", ["onion", "carrot", "zucchini"]];

const fruits = ["banana", "apple", "orange"];
console.log(fruits.length); // affichera 3


const colors = ["pink", "black", "salmon", "gold"];
console.log(colors.join(" - "));


const myDog = {
    name: "Rex",
    colors: ["white", "black"],
};
myDog.age = 3;

console.log(myDog); // affichera { name: 'Rex', colors: [ 'white', 'black' ], age: 3 }
myDog["age"] = 3;

console.log(myDog["name"]); // affichera Rex

console.log(myDog["colors"]); // affichera [ 'white', 'black' ]


console.log(myDog.name); // affichera Rex

console.log(myDog.colors); // affichera [ 'white', 'black' ]

//const name = "Le Reacteur";

//if (name === "Le Reacteur") {
    //console.log("Welcome to our coding bootcamp !");
//}

const name = "React";

if (name === "Le Reacteur") {
    console.log("Welcome to our coding bootcamp !");
}else {
    console.log("It's not a coding bootcamp.");
}

//const number = 1;

//if (number === 0)  {
   //console.log("The number is O");
//}else if (number === 1) {
    //console.log("The number is 1");
//}else {
    //console.log("The number is neither 0 or 1");
//}

//const number = 1;
//if (number !== 0);
    //console.log(("The number is not O"));

//const number = 1;

//if (number > 0) {
  //  console.log("The number is greater than O");
//} else if (number < 0) {
  //  console.log("The number is lower than O");
//}

//const number = -1;

//if (number >= 1) {
    //console.log("The number is greater than ou equal to 1");
//} else if (number <= 0) {
    //console.log("The number is lower than or equal to 0");
//}



let number = 1;

while (number <=5) {
    console.log(number);
    number++;
}

for (let i = 0; i <= 5; i++) {
    console.log(i);   
}

// const string = "Le Reacteur";

// const lastCharacter = string.length -1;

// let position = 0;

// while (position <= lastCharacter) {
//     console.log(string[position]);
//     position++;
// }

// const string = "code";
// console.log(string.length); // 4

// const string = "code";
// const lastCharacter = string.length - 1;
// console.log(string[lastCharacter]); // e

const string = "Le Reacteur";

for (let i = 0; i <= string.length - 1; i++) {
    console.log(string[i]);    
}
