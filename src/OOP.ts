class Employee{
    name:string;
    id:number;
    email:string;
    private salary:number;

    constructor(name:string, id:number, email:string, salary:number){
        this.name=name;
        this.id=id;
        this.email=email;
        this.salary=salary;
    }


    get salaryInfo():number{
        return this.salary;
    }

    set salaryInfo(newSalary:number){
        if(newSalary<0){
            throw new Error("Salary cannot be negetive");
        }
        else{
            this.salary=newSalary;
        }
    }

    describe():string{
        return `Employee ${this.name} with ID ${this.id} has email ${this.email} and salary ${this.salary}`;
    }
}

const empl1=new Employee("Rad", 1234, "shafiur@gmail.com", 50000);
console.log(empl1);


class Manager extends Employee{
    department:string;

    constructor(name:string, id:number, email:string, salary:number, department:string){
        super(name, id, email, salary);
        this.department=department;
    }
}

const Manager1=new Manager("Shafiur", 1234, "shafiur@gmail.com", 60000, "IT");

console.log(Manager1.describe());

