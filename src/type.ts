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


interface Port{
    port?: number
}

const Port:Port={
    port: 5000
}

const currentPort:number=Port.port!;

const Info={
    Name:"Shafiur",
    Age: 25,
    Email:"shafiur@example.com"
} as const;

// can not be changed because of as const

const getUserName =(name:string|number)=>{
    if(typeof name === "string") {
    console.log(name.toUpperCase());
    }
    else{
        console.log(name.toFixed(2));
    }
}

const wrappedInArray=<T>(value:T)=>{
    return [value];
}

const nameInfo=wrappedInArray("Shafiur");
const numberInfo=wrappedInArray(25);

nameInfo.map((key)=>key.toUpperCase());


