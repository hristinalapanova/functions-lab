// Question 1
function maxOfTwoNumbers(a, b) {
if (a> b){
    return a
}
else if (a <b){
    return b
}
}
function maxOfTwoNumbers(a, b) {
    return (isBigger ? a : b);
  }

// Question



function maxOfThree(a, b, c) {
if (a > b && a > c){
    return a
}
else if (b > a && b > c){
    return b
}
else if (c > a && c > b){
    return c
}
}

// Question 3
function isCharacterAVowel(char) {
if ( char === a|| char === e || char === o || char === u || char === i
    ){
        return true
    }
    else {
        return false
    }
}


// Question 4: Part 1

function sumArray(arr) {
    let sum=0;
for(let i=0; i<arr.length; i++){
sum=arr[i]+sum
}
}

// Question 4: Part 2

function multiplyArray(arr) {
    let sum=1;
for(let i=0; i<arr.length; i++){
    sum=sum*arr[i]
}
}

// Question 5
const numberOfArguments = function(...args) {
return args.length
}

// Question 6
const reverseString = function(string) {
    let reverseString= string.split("").reverse().join("")

}
reverseString("mouse")
// Question 7

function findLongestWord(arr) {
    let longest= arr[0].length
    for (let i=1; i<arr.length; i++){
if(longest< arr[i].length){
    longest= arr[i]

}

    }
    return longest
}

// Question 8
function filterLongWords(arr, i) {
    let newArray=[];
for (let k=0; k<arr.length; k++){
    if (arr[k].length> i){
       newArray.push(arr[k])
    }
}
}

// Bonus 1
function charactersOccurencesCount(string) {

}
