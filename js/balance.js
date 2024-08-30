class BankAccount {
    constructor(name, balance) {
        this.accountName = name
        this.balance = balance
    }
}

class BankBalanceTracker {
    constructor() {
        this.accounts = []
    }

    getBankBalances() { //retreive balance of each bank account
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
}