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
class Account extends Bank {
    constructor(code,address, number, balance){
        super(code, address);
        this.balance = balance;
        this.number = number;
    }
    deposit = () => console.log('deposit');
    withdraw = () => console.log('withdraw')  
}

class AtmTransaction extends Account {
    constructor(number, balance, transactionId, date, type, amount, postBalance) {
        super(number, balance)

        this.transactionId = transactionId;
        this.date = date
        this.type = type
        this.amount = amount
        this.postBalance = postBalance
    }

    modifies = () => console.log("Modified");
}

// class Account extends Customer {
//     constructor(code, address, number, balance) {
//         super(code, address);

//         this.number = number
//         this.balance = balance
//     }

//     deposit = () => console.log("Deposited")
//     withdraw = () => console.log("Withdrawn")
// }

class CheckAccount extends Account {
    constructor(code, address, number, balance, entry) {
        super(code, address, number, balance)
        this.entry = entry
    }

    markEntry = () => console.log("Entry Marked");
}

class SavingsAccount extends Account {
    constructor(code, address, number, balance, entry) {
        super(code, address, number, balance)
        this.entry = entry
    }
    markEntry = () => console.log("Entry Marked");
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