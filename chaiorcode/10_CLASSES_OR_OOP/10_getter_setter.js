class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email=value
    }








    // get password(){
    //     return this._password.toUpperCase()
    // }

    get password(){
        return `${this._password.toUpperCase()}Shivam`
    }

    set password(value){
        this._password=value.toUpperCase()
    }
}
const Shivam=new User("h@shivam@gmail.com","abc")
// console.log(Shivam.password)
console.log(Shivam.email)