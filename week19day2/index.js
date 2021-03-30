class Bank {
    constructor(code, address) {
        this.code = code;
        this.address = address;
    }
    getAccounts = () => `${this.code}, ${this.address}`
}

class ATM extends Bank {
    constructor(code, address, location, managedby) {
        super(code, address);
        this.location = location;
        this.managedby = managedby;
    }
    locat = () => `${this.location}`
    withdraw = () => console.log('withdraw');
    deposit = () => console.log('deposits');
    checkBalance = () => console.log('check balance');
}

class Customer extends ATM {
    constructor(code, address, name, addressC, dob, cardNumber, pin){
        super(code, address);
        this.name = name;
        this.addressC = addressC;
        this.dob = dob;
        this.cardNumber = cardNumber;
        this.pin = pin
    }
    verifyPassword = () => console.log('show password')
}

const axis = new Bank(1422, "Delhi");
console.log(axis.getAccounts());

const atm = new ATM(1442, "delhi", "india", "xyz")
console.log(atm.locat())
atm.withdraw();
atm.deposit()
atm.checkBalance()

const customer1 = new Customer(1241, "delhi", "hemant", "karol bagh", 01/08/1995, 125485355, 2586);
customer1.verifyPassword()