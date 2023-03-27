const os  = require('os');
//info about current user
const user  = os.userInfo();
console.log(user);

//method returns uptime of system in seconds
console.log(`The system uptime is ${os.uptime()} seconds`); 

const currentOS = {
    name: os.type(),
    relaease: os.release(),
    totalMem: os.totalmem(),
    freeMemm: os.freemem()
}
console.log(currentOS);