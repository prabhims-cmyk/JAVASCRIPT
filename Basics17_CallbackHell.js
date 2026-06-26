// call back hell occurs when a number of callback functions are called inside function
function getuser(callback){
    setTimeout(()=>{console.log("User fetched."); // syntax -> setTimeout(function, timespan);
                    callback({id:1});
                    },1000);
}
function getorders(userid,callback){
    setTimeout(()=>{console.log("Orders fetched.");
                    callback([101,102]);
                    },1000);
}
function getorderdetails(orderid,callback){
    setTimeout(()=>{console.log("Order  details fetched.");
                    callback({orderid:orderid,amount:500});
                    },1000);
}
function processpayment(order,callback){
    setTimeout(()=>{console.log("Payment processed");
                    callback("Success")
                    },1000);
}
getuser((user)=>{ 
    getorders(user.id,(orders)=>{
         getorderdetails(orders[0],(order)=>{
            processpayment(order,(status)=>{
                console.log("Payment Status:",status);
            });
         });
    });  
});
