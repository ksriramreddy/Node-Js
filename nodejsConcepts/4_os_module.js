const os = require('os');

console.log('version'+os.version()); //Returns a string identifying the kernel version.

console.log("architecture",os.arch()); //Returns the operating system architecture.

console.log("CPU specifications",os.cpus()); //Returns an array of objects representing the CPU cores. Each object has properties like model, speed, and times.

console.log("free memory",os.freemem()); //Returns the amount of free memory in bytes.

console.log("total mem",os.totalmem()); //Returns the total amount of memory in bytes.

console.log("home directory",os.homedir()); //Returns the user's home directory.

console.log("network interface",os.networkInterfaces()); //Returns an object containing network interfaces as the keys and details about each interface as the values.

console.log("user info",os.userInfo()); // returns current user info

console.log("uptime",os.uptime()); // returns system uptime in seconds

const currentOs = {
    name: os.type(),
    version: os.version(),
    totalMem : ((os.totalmem()/1020)/1020)/1020,
    freeMem : ((os.freemem()/1020)/1020)/1020
}
// console.log(currentOs);

