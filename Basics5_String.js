// String Array Functions

let day = "Tuesday";
console.log(day.length);

let subDay = day.slice(0,4);// will exclude the last index
console.log(subDay);

console.log(day[1]);

let splitDay = day.split('s'); // splits the string before and after 's'
console.log("SplitDay: "+splitDay);
console.log(splitDay[0]);
console.log(splitDay[1]);


let date = '23';
let nextDate = '27';
let difference = parseInt(nextDate)-parseInt(date); // string is converted to integer
console.log(difference);

let newQuote = day+" is funday";
console.log(newQuote);

let val = newQuote.indexOf("day");
console.log(val); // will be the index of d in Tuesday
let value = newQuote.indexOf("day",5); // will check from 5th position
console.log("value:  "+value); 
let count = 0;
while(val!==-1)
{
    count++;
    val = newQuote.indexOf("day",val+1); // indexof will return -1 if it doesn't find "day"
}
console.log(count);
console.log(val);

