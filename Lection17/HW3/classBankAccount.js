class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return `Current balance: $${this.balance}`;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      console.log("Withdrawal amount must be positive");
    }
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // Current balance: $1000

account1.deposit(500);

console.log(account1.getBalance()); // Current balance: $1500

account1.withdraw(200);

console.log(account1.getBalance()); // Current balance: $1300
