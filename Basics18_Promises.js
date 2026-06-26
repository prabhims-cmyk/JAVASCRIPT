//Promise states: Pending:Initial state. the operation has started but is neither fulfilled nor rejected.
//                Fulfilled:The operation completed successfully, and a value is available.
//                Rejected:The operation failed, and an error will show.
// Promise syntax
const promise = new Promise((resolve, reject)=>{ //let myPromise = new Promise(function(resolve, reject) {
                            let success = true;
                            if(success){
                                resolve("Operation successfull"); // when successful
                            }
                            else{
                                reject("Operation failed");    // when error 
                            }
});
console.log(promise);

// then catch
const mypromise = new Promise((resolve,reject)=>{
                                let success = false;
                                if(success){
                                    resolve("Data loaded successfully");
                                }
                                else{
                                    reject("Error loading data");
                                }
});
mypromise.then(result=>console.log(result)) // then = success
.catch(error=>console.log(error)); // catch = error

let prom = new Promise((resolve,reject)=>{
    resolve("Done");
});
prom.then((result)=>{
    console.log(result);})
    .finally(()=>{
    console.log("Finally runs always"); // finally will show always if the result is success or fail
});
