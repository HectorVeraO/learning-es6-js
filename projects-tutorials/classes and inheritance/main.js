'use strict'

// A class is a general blueprint to represent objects
class User {

    // this the constructor used to create instances of User
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // this is a static method
    // it means that it can be used without instatiating the class
    static countUsers() {
        console.log('There are 50 users');
    }

    // this is a method that needs an instance of the class
    register() {
        console.log(this.username + ' is now registered');
    }
}

let bob = new User('Bob', 'bob@email.com', '123');

bob.register();

User.countUsers();

// Inheritance

class Member extends User {

    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage() {
        console.log(this.username + ' is subscribed to the ' + this.memberPackage + ' package');
    }
}

let mike = new Member('Mike', 'mike@email.com', '123', 'standard');

mike.getPackage();