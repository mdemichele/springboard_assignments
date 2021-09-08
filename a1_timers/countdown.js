/* ASSIGNMENT 1:
Instructions: 
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. 
Once the value is 0 it should log “DONE!” and stop.
*/

function countdown(num) {

    while (num > 0) {
        setTimeout(logNum(num), 1000);
        num--;
    }
    console.log("Done!");
    return 0;
};

function logNum(num) {
    console.log(num);
}

