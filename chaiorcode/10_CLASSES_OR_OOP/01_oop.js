const user={
    username:"Shivam",
    logincount:8,
    SignIn:true,

getUserDetails:function(){
    // console.log("got user datails from database")
    // console.log(this)
    // console.log(`USERNAME: ${this.username}`)
}
}
console.log(user.getUserDetails())
// console.log(user.username)
// console.log(this)


const promiseone=new Promise()
const date=new date()

//here new is constructor function & it is used for creating multiple instances from one object

function user(username,logincount,isLoogedIn){
    this.username=username
    this.logincount=logincount
    this.isLoogedIn=isLoogedIn

    return this;//bydefault it is defined
}

const userOne= new user("hitesh",12,true)
const userTwo= new user("Shivam",11,false)//if we use new keyword then it never override the value otherwise always override
console.log(userOne)



//uses of new keyword
/*
->new object will created
->constructor function will called after new keyword
->all arguments are injected
->output will come
*/ 

//constructor is only reference to the user