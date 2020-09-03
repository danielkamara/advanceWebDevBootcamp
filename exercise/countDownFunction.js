// Assignment: Exercise countDown Function

/* 
Your goal is to implement a function called countDown that accepts a time in seconds. 
The function will print the time remian to the console every second. 
Instead of printing 0, the function should print "Ring Ring Ring!!!"
*/

function countDown(seconds) {
var intervalId = setInterval(function() {
    seconds--
    if (seconds > 0 ) {
        console.log("Timer: ", seconds)
    } else {
        console.log("Ring Ring Ring")
        clearInterval(intervalId);
    }
}, 1000)
}

countDown(5)