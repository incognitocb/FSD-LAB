//1. a) Code an event handling application in Node.Js.
//Source Code:
// Implementing an event handling application in NodeJs
var events = require('events');
function Account() {
	this.balance = 0;
	events.EventEmitter.call(this);
	this.deposit = function(amount) {
		this.balance += amount;
		console.log("Amount $" + amount + " Deposited.!");
		this.emit('balanceChanged');
	};
	this.withdraw = function(amount) {
		console.log("Amount want to withdraw: $" + amount);
		if (this.balance > amount) {
			this.balance-= amount;
			console.log("Withdraw Done Successfully.");
			this.emit('balanceChanged');
		}
		else 
			this.emit('InsufficientAmount',amount);
	};
}
Account.prototype.__proto__= events.EventEmitter.prototype;
function displayBalance() {
	console.log("Account balance: $%d", this.balance);
}
function checkBalance(amount) {
	if (this.balance < amount) {
		console.log("Sorry..! U have balance: $"+this.balance+" Only., Withdraw Sufficient Balance is not maintained.");
	}
}
function checkGoal(acc, goal) {
	if (acc.balance > goal) {
		console.log("Goal Achieved!!!, Withdraw Sufficient Balance is maintained.");
	}
}
var account = new Account();
account.on("balanceChanged", displayBalance);
account.on("InsufficientAmount", checkBalance);
account.addListener("balanceChanged", function() {
 checkGoal(this, 1000);
});
account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1100);
account.withdraw(100);


