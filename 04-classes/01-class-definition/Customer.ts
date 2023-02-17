class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Mark", "Dixon");

console.log(myCustomer.lastName + ", " + myCustomer.firstName);