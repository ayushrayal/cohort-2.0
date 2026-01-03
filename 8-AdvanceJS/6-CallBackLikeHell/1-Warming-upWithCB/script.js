let sec = parseInt(prompt("Enter your seconds : "));
function afterDelay(sec,fn){
    console.log(`wait for ${sec} seconds`);
    setTimeout(()=>{
        fn();
    },1000 * sec);
}
afterDelay(sec,function(){
    console.log("Callback Excuted");  
})