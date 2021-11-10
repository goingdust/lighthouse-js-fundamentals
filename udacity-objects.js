// See if you can create the close() method!

var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function() {
    if (umbrella.isOpen === false) {
      return 'The umbrella is already closed!';
    } else {
      umbrella.isOpen = false;
      return 'Julia closes the umbrella!';
    }
  }
};

// Object literals

var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy"],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return 'Sarah paints!'; }
};

// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

// Menu items

const breakfast = {
  name: 'The Lumberjack',
  price: '$9.95',
  food: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
}

// Bank accounts

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function greetAndShowAccount() {
    return `Welcome!\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`;
  }
};

// Facebook friends

const facebookProfile = {
  name: 'Dusty',
  friends: 735,
  messages: ['Hey everybody, I did a thing!', 'I\'m boooooorrrrred', 'Here\'s my cat'],
  postMessage: function addNewMessage(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function removeMessage(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function incrementFriendCount() {
    facebookProfile.friends += 1;
  },
  removeFriend: fund line app (brought to you by the lovely folks at NodeSchool) is not installed on your VM. To insta

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut) {
  console.log(`${donut.type} donuts cost $${donut.cost} each`);
});