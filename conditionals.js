/* Conditional operators
===
!==
<
<=
>
>=

Logical operators
And - &&
Or  - ||
not -  !
 */

//Program that shows following day when typed the current day
let today = prompt("Enter the day:");
switch (today) {
    case "Monday": console.log("Following day: Tuesday");
                    break;
    case "Tuesday": console.log("Following day: Wednesday");
                    break;
    case "Wednesday": console.log("Following day: Thursday");
                    break;
    case "Thursday": console.log("Following day: Friday");
                    break;
    case "Friday": console.log("Following day: Saturday");
                    break;
    case "Saturday": console.log("Following day: Sunday");
                    break;
    case "Sunday": console.log("Following day: Monday");
                    break;
    default: console.log("Check your input");
}


//Problem to check whether the number is >, <, ===
let a = 5, b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (a < b) {
    console.log(`${a} is less than ${b}`);
} else if (a === b) {
    console.log(`${a} is equal to ${b}`);
}


//Display number of days in a month using if and switch
let month = Number(prompt("Enter the month:"));
if (month >= 1 && month <= 12) {
    let days = 31;
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
    }
    alert(`This month has ${days} days`);
} else {
    alert("Unknown month!");
}


//Adding seconds to time.
let hours = Number(prompt("Enter the hours:"));
let minutes = Number(prompt("Enter the minutes:"));
let seconds = Number(prompt("Enter the seconds:"));

// We start by testing errors cases
if (
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    seconds >= 0 &&
    seconds <= 59
) {
    seconds++; // Incrementing the seconds
    if (seconds === 60) {
        // Next minute: seconds are reset to 0
        seconds = 0;
        minutes <= 59 &&
        minutes++;
        if (minutes === 60) {
            // Next hour: minutes are reset to 0
            minutes = 0;
            hours++;
            if (hours === 24) {
                // Next second is midnight
                hours = 0;
            }
        }
    }
    console.log(
        `In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds.`
    );
} else {
    console.log("Incorrect input!");
}