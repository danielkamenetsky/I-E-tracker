// Class to represent a bank account
class BankAccount {
    //Constructor to initialize the bank account with a name and balance
    constructor(name, balance) {
        this.accountName = name
        this.balance = balance
    }
}
// Class to track the balance of bank accounts
class BankBalanceTracker {
    constructor() {
        this.accounts = []
    }
    // Method to retrieve the balance of each bank account
    getBankBalances() {
        while (true) {
            let accountName = prompt("Enter the name of the bank account: ")
            if (!accountName) {
                break
            }
            try {
                let balance = parseFloat(prompt("Enter the balance of the bank account: "))
                if (isNaN(balance)) {
                    throw new Error("Invalid input. Please enter a valid number for the balance.")
                }
                this.accounts.push(new BankAccount(accountName, balance))
            } catch (error) {
                alert(error.message)
            }
        }
        return this.accounts
    }
    // Method to add a new bank account 
    addAccount(account) {
        this.accounts.push(account)
        console.log(`Account added: ${account.accountName} with balance ${account.balance}`)
    }

    // Method to remove a bank account
    removeAccount(accountName) {
        this.accounts = this.accounts.filter(account => account.accountName !== accountName)
        console.log(`Account removed: ${accountName}`)
    }
}