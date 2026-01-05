let users = ["ayushrayal17@gmail.com","ayushrayal19@gmail.com","ayushrayal529@gmail.com"];
function sendmail(users){
    return new Promise((resolve,rejected) =>{
        let time = Math.floor(Math.random()*5);
        setTimeout(()=>{
            let probability = Math.floor(Math.random()*10);
            if(probability<=5) resolve(`Email successfully sent to ${users}`)
            else rejected(`Email not sent to ${users}`)
        },time * 1000)
    })
}
async function sendEmails(users){
    let allresponses = users.map(function(email){
        return sendmail(email)
        .then(function (data){
            return data;
        })
        .catch(function(error){
            return error;
        });
    })
    let ans = await Promise.all(allresponses);
    ans.forEach(function(status,index){
        console.log(`Number ${index+1} email info : ${status}`);
        
    })
}
sendEmails(users);