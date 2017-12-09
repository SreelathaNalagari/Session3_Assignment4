/** abstract class Department that is extended by below two classes 
 * 
 *  @Class AccountingDepartment
 *  @Class PhysicsDepartment
 * */

abstract class Department {
    name: string;
    constructor (name) {}
    printName(): void { console.log(`${this.name} and message goes here...`)}
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor(name){
        super(name);
        this.name = name;
    };
    printMeeting(){
        console.log(`Meeting scheduled for ${this.name}`);
    }

}

class PhysicsDepartment extends Department {
    constructor(name){
        super(name);
    };
    printMeeting(){
        console.log(`Meeting scheduled for ${this.name}`);
    }     
}

let accounts = new AccountingDepartment("Accounting Department");
accounts.printName();
accounts.printMeeting();
//console.log(accounts);

let physics = new AccountingDepartment("Physics Department");
physics.printName();
physics.printMeeting();
//console.log(physics);
