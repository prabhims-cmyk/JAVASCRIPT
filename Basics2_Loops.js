const flag = true;
if(flag)
{
    console.log("Condition satisfied");
}
else
{
    console.log("Condition not satisfied");
}

// while - entry control statement.condition checks at the entry level
let i = 0;
while(i<=10) 
    {
        i++;
        console.log("while loop:i= " + i);
    }  
    
// do while - exit control statement.condition checks at the exit level    
i=0;    
do
{ 
    i++;
    console.log("do-while loop:i= " + i);
}while(i<10); 

// for loop - entry control statement
for(let i = 1;i>4;i++)
{
    for(let j = 1;j>10;j++)
    {
    console.log("for loop:i= " + i + ", j= " + j);
    }
}
   