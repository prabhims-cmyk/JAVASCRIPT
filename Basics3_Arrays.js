var marks = Array(6);
var marks = new Array(20,40,35,10,27,100);
var marks = [20,40,35,10,27,100];
console.log(marks[2]);
console.log(marks);
marks[3] = 14;
console.log(marks);
console.log(marks.length);
marks.push(65); // push - add an element at the end of an array
console.log(marks);

marks.pop(); // pop - removes an element from the end of an array
console.log(marks);

marks.unshift(13); //adds an element at the beginning of the array
console.log(marks);

marks.shift(); // removes an element at the beginning of an array
console.log(marks);

console.log(marks.indexOf(100));// gives the index

console.log(marks.includes(120)); // returns whether the number is present in the array.returns true or false

let submarks = marks.slice(2,5); // will return numbers from 2nd index excluding the 5th index. ie, from 2 to 4 
console.log(marks);
console.log(submarks);

// sum of array
let sum = 0;
for(let i = 0;i<marks.length;i++)
{
    console.log(marks[i]);
    sum=sum+marks[i];
}
console.log("Sum: "+sum);

// sum using reduce
let total = marks.reduce((sum,m)=>sum+m,0); // m is the items in the array. sum - where you have to store the value
console.log("Sum: "+total);

// average using reduce
let average = marks.reduce((avg,m)=>avg+m/marks.length,0);
console.log("Average: "+average);

// find even numbers in an array
let evenscores = [];
var scores = [12,13,14,16];
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
        evenscores.push(scores[i]);
    }
}
console.log("Evenscores: "+evenscores);

// find even numbers in an array using 'filter method'
let newFilterEvenScores = scores.filter(s=>s%2==0);// s - each element of score
console.log("NewFilterEvenScores: "+newFilterEvenScores)

// MAP
let mappedArray = newFilterEvenScores.map(s=>s*3);// * the even no by 3 and maps into another array
console.log("Mapped Array: "+mappedArray)

let totalVal = mappedArray.reduce((sum,val)=>sum+val,0);
console.log("Total val: "+totalVal)

// filter, map and reduce in a single step
var scores1 = [12,13,14,16];
let sumValue = scores1.filter(s=>s%2==0).map(s=>s*3).reduce((sum,val)=>sum+val,0);
console.log(sumValue);

// String Array functions
let fruits = ["banana","mango","guava","apple"];
console.log(fruits.sort());
console.log(fruits.reverse());

var score = [12,3,19,16,14];
console.log(score.sort());//will not sort numeric array in correct way
console.log(score.sort((a,b)=>a-b)); 
console.log(score.sort((a,b)=>b-a)); 
