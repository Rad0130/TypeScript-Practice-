interface UserInfo {
    id: number,
    Name: string,
    Email: string,
    Status:{
        Group: string;
        Role: string;
    },
}

type id = number;

type role = "Admin" | "User" ;

// interface User{
//     Name: string,
//     Id: id,
//     Role: role
// }

// const User: User ={
//     Name:"Rad",
//     Id: 1234,
//     Role: "Admin"
// }



interface Animal{
    Species: string
}

interface cat extends Animal{
    breed:string
}

const cat:cat ={
    Species:"Feline",
    breed:"Persia"
}

type Vehicle ={
    Brand: string,
}

type car = Vehicle &{
    Model: string,
    Registration: string,
}

const car:car={
    Brand:"Toyota",
    Model:"Corolla",
    Registration:"ABC123"   
}


interface user{
    name:string
}

type loggedinUser= user | null

const currentuser:loggedinUser = null;


type status="Pending" | "Approvedd" | "Rejected";

const someStatus:string = "Pending";

const showStatus =(status:status)=>{
    console.log(`Your Current Status is ${status}`);
}

showStatus(someStatus as status);






