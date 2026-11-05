class Employee{
    name:string;
    id:number;
    email:string;

    constructor(name:string, id:number, email:string){
        this.name=name;
        this.id=id;
        this.email=email;
    }
}

const empl1=new Employee("Rad", 1234, "shafiur@gmail.com");
console.log(empl1);

