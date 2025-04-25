//callback function = function that is passed as an argument to another function

                    //used to handle asycronous operation
                    //reading file
                    //Network request
                    //Interacting with database
                    // when done call this next
                    
hello(goodBye);

function hello(callback) {
    console.log("Hello");
    callback()

}
function goodBye() {
    console.log("Goodbye")
}

//example-2
sum(displayResult,3,5)

function sum(callback, x, y) {
    let Result = x + y;
    callback(Result)
}

function displayResult(Result) {
    document.getElementById("Result").textContent =Result;
    console.log(Result)
}