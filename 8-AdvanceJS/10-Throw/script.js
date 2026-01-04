try{
    let a = 10;
    console.log(a.abc.def);
}
catch(err){
    throw new Error("Something Wrong on our side " + err.message);
}finally{
    console.log("Execution completed.");
}