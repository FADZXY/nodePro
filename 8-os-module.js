// // const amount=9;
// // if(amount<10){
// //     console.log("small amount");
// // }
// // else{
// //     console.log("large number");
// // }
// // console.log(`hey its my first node project`);
// const names =require('./4-names');
// const fun =require('./5-utils');
// const data=require('./6-alternative-flavor');
// require('./7-mind-grenade');
// // console.log(names);
// // console.log(fun);
// // console.log(data)
// // fun('susan');
// // fun(names.john);
// // fun(names.peter);
const os=require('os');
//info about current user
const user=os.userInfo();
console.log(user);
//method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)