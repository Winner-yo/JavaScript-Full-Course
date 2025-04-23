// string method
let AshCoding = '  AsheCodingos   ';
console.log(AshCoding.charAt(0)) //which is A
console.log(AshCoding.indexOf('o'))//it find index of the first occurrence element & default if not character found it will return -1
console.log(AshCoding.lastIndexOf('o'))//reverse of line 4
console.log(AshCoding.length) //return length of the string
let username = AshCoding.trim()//remove white space
console.log(username)
console.log(username.toUpperCase())
console.log(username.toLowerCase())
console.log(username.repeat(3))//repeat the string 3 times

let name = ' A she ';
//let U_name = name.startsWith(' ')
//let U_name = name.endsWith(' ')
let U_name = name.includes(' ')
//console.log(U_name)
if (U_name) {
    console.log("Username can't include white space")
}
else{
    console.log(`Your User name is ${name}`)
}

let phoneNumber = "123-456-789";
phoneNumber = phoneNumber.replaceAll('-', '')//replace the first character by the second one
//phoneNumber = phoneNumber.padStart(25, '0')
//phoneNumber = phoneNumber.padEnd(25, '0')
//phoneNumber = phoneNumber.replaceAll('-', '')
console.log(phoneNumber);