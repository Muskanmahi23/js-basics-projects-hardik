class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const hardik = new User("hardik")
// console.log(hardik.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("Iphone", "I@phone.com")
iPhone.logMe()
// console.log(iPhone.createId());