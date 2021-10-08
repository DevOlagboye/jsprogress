function Increase() {
    var num = document.getElementById("number");
    num.innerHTML++;
}

function Check() {
    var textarea = document.getElementById("textarea").value;
    var results = textarea.length;

    alert("There are " + results + " Characters in this Text Area");
}
// var noun = document.getElementById("noun").value;
// var adjectives = document.getElementById("adj").value;
// var verb = document.getElementById("").value;
// var noun = document.getElementById("noun").value;

function brainLab(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " it " + myAdverb;
    return result;
}
console.log(brainLab("dog", "big", "killed", "quickly"));
console.log(brainLab("bike", "slow", "flew", "slowly"));

var myArray = ["name", "age", "location"];

var newArray = ["Olagboye", "16", "Ijebu-Ode"];

console.log("My " + myArray[0] + " is " + newArray[0]);
console.log("I am " + newArray[1] + " Of " + myArray[1]);
console.log("My current " + myArray[2] + " is " + newArray[2]);

// var nestedArray = [["Bulls", 23], ["White Sox", 45]];
// console.log(nestedArray[0][0] , nestedArray[0][1]);
// console.log(nestedArray[1][1]);

// var multiArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
// console.log(multiArray[3][2]);

function myFunction(noun, adjectives, verb, pronoun, adverb) {
    console.log(noun + " Is An Example of A Noun\n" + adjectives + " Is An Example of an Adjective\n" + verb + " Is An Example of A Verb \n" + pronoun + " Is An Example of a pronoun \n" + adverb + " Is An Example of An Adverb");
}
myFunction("Ola", "Big", "Killed", "He", "Quickly");

let myObj = {
    name: "Olagboye",
    age: 21,
    bestmusics: ['Bounce', 'Bring it On'],
    artistes: ['P Square', 'Wizkid', 'Olamide', 'Badoo']
};

console.log(myObj.artistes.push('Baddest'));
console.log(myObj.artistes);
myObj.bestmusics.pop();

console.log(myObj['bestmusics'].length);


let answer = " ";

let myFunctionInfo = (myName, myAge, mySchool) => {
    return answer = "My Name is " + myName + " I am " + myAge + " Years of Age " + "I finished School at " + mySchool;
}
console.log(myFunctionInfo('Olagboye', 22, 'Olabisi Onabanjo University'));

let contacts = [{
        firstname: "Akira",
        lastname: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"]
    },
    {
        firstname: "Harry",
        lastname: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        firstname: "Sherlock",
        lastname: "Holmes",
        number: "0487345643",
        likes: ["Intriguig Cases", "Voilin"]
    },
    {
        firstname: "Kristian",
        lastname: "Voi",
        number: "unknown",
        likes: ["Javascript", "Gaming", "Foxes"]
    }
];

let lookUpProfile = (name, prop) => {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstname === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such Contact";
}
let data = lookUpProfile("Sherlock", "likes");
console.log(data);