class details{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    loggedIn(){
        return `${this.name} has logged in`;
    }
}
let user1 = new details("ayush rayal", "ayushrayal17@gmail.com");
let user2 = new details("karan pal", "karanpal2@gmail.com");
let user3 = new details("abhishek pal", "abhishekpal7@gmail.com");
let user4 = new details("arjun kathiat", "arjundon@gmail.com");
let user5 = new details("akash kumar", "akiiiii@gmail.com");

let users = [user1, user2, user3, user4, user5];

for(let i = 0; i < users.length; i++){
    console.log(`Name: ${users[i].name} | Email: ${users[i].email} | Logged In: ${users[i].loggedIn()}`);
}
