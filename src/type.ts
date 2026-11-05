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

interface User{
    Name: string,
    Id: id,
    Role: role
}

const User: User ={
    Name:"Rad",
    Id: 1234,
    Role: "Admin"
}

