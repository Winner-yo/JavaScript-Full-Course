// switch = efficient replacement of else if statement
let day = 'm';
switch (day) {
    case 'Monday':
        console.log('Monday'); 
        break;
    case 'Tuesday':
        console.log('Tuesday'); 
        break;
    case 'Wednesday':
        console.log('Wednesday+'); 
        break;
    case 'Thrusday':
        console.log("Thrusday"); 
        break;
    case 'Friday':
        console.log("Friday"); 
        break;
    case 'Saturday':
        console.log("Saturday"); 
        break;
    case 'Sunday':
        console.log("Sunday"); 
        break;
    default:
        console.log(`${day} is not a day`)

}

let score = 75
let Grade;
switch (true) {
    case score >= 90:
        Grade = 'A';
        break;
    case score >= 80:
        Grade = 'A-';
        break;
    case score >= 70:
        Grade = 'B+';
        break;
    default:
        Grade = 'F';
}
console.log(Grade)