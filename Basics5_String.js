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
///////////////////////////////////////////////////
//string reversal
let original = "welcome";
let reverse = original.split('').reverse().join('');
console.log(reverse);
//Palindrome
let inp = "123321";
let rev = inp.split('').reverse().join('');
if(inp===rev)
{
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}
//or
function isPalindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));

//Anagram
let input11 = "silent";
let check = "listens";
let ippsplt = input11.split('').sort().join('');
let checksplt = check.split('').sort().join('');
if(ippsplt===checksplt)
{
    console.log("Anagram");
}
else
{
    console.log("Not Anagram");
}
// Duplicate characters
let inpstring ="prsssabbrhii";
let sptstrng  = inpstring.split('');
let counts = inpstring.length;
console.log(counts);
for(let i = 0;i<=counts;i++)
{
    let ct = 1;
     for (let j = i + 1; j < counts; j++) 
     {
        if(sptstrng[i]==sptstrng[j])
        {   
            ct++;
        }
     }
    if (ct > 1 && sptstrng.indexOf(sptstrng[i]) === i)
    {
            console.log(sptstrng[i], "->", ct);
    }
}
// Duplicate array
let arr = [1, 2, 3, 2, 4, 5, 5, 6, 3];
for(let i = 0;i<=arr.length;i++){
    let countss = 1;
    for(let j = i+1;j<=arr.length;j++){
        if(arr[i]==arr[j]){
            countss++;
        }
    }
    if(countss > 1 && arr.indexOf(arr[i]) === i){
        console.log(arr[i], "->", countss);
    }
}

