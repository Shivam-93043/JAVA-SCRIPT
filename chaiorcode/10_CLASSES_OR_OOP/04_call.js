function SetUserName(username){
    this.username=username
}
function createuser(username,email,password){
    SetUserName.call(this,username)

    this.email=email
    this.password=password
}

const chai= new createuser("chai","chaifb@.com","123")
console.log(chai)