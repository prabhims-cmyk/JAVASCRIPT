// error is an inbulit object 
function Display()
{
    try
    {
        let result=10/2;
        console.log(result);
    }
    catch(error)
    {
        console.log("An error occured" + error.message);
    }
}
Display();

// with error --catch execution

function DisplayError()
{
    try
    {
        console.log(myvalue);
    }
    catch(error)
    {
        console.log(error.message);
    }
}
DisplayError();