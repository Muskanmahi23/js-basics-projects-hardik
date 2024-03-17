class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}hardik`
    }

    set password(value) {
        this._password = value
    }
}

const hardik = new User("h@hardik.ai", "abc")
console.log(hardik.password);
console.log(hardik.email);
