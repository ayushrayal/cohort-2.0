let prm = new Promise((res, rej)=>{
    setTimeout(()=>{
        let val = Math.floor(Math.random()*10);
        if(val<5){
            console.log("This is Resolved ",val);
        }else{
            console.log("This is Rejected ",val);
        }
    },3000)
})
prm.then(()=>{
})
.catch(()=>{
})