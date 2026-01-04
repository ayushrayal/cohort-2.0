try{
    let a = 10;
    console.log(a);
}catch(err){
    console.log("Error caught: " + err.message);
}finally{
    console.log("Execution completed.");
}