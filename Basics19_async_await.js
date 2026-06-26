// async - used to declare a function as asynchronous
// await - used in promise
async function display(){
    let promise = new Promise((resolve,reject)=>{
                                                setTimeout(()=>{
                                                    resolve("Done");
                                                },1000);
    });
    let result = await promise;
    console.log(result);
}
display();
