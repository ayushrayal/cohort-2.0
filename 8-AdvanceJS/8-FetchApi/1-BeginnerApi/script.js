function newUser(){
    fetch("https://randomuser.me/api/")
    .then((rawdata) => rawdata.json())
    .then((data) =>{
        console.log(data.results[0].name.title +" "+data.results[0].name.first+ " " 
            + data.results[0].name.last
        );
        console.log(`Location : ${data.results[0].location.street.number} ${data.results[0].location.street.name}`);
        console.log(`Email : ${data.results[0].email}`);
        
    })
    .catch((err)=>{
        console.log("Error",err);
    })
}
newUser();
let btn = document.getElementById("refresh").addEventListener("click",newUser);