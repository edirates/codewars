/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration (seconds) {
    // First declare variable for each divider for seconds according to year, day, hour, minute and second
    var reqYear = 365 * 24 * 60 * 60 * 1; 
    var reqDay = 24 * 60 * 60 * 1;
    var reqHour = 60 * 60 * 1;
    var reqMinute = 60 * 1;
    var reqSecond = 1;
    // Modulus each left seconds according to each level to get the value of year, day, hour, minute and second
    var leftYear = seconds % reqYear;
    var leftDay = leftYear % reqDay;
    var leftHour = leftDay % reqHour;
    var leftMinute = leftHour % reqMinute;
    // Divide each left seconds with the required divider to get the value of year, day, hour, minute and second
    var year = Math.floor(seconds / reqYear);
    var day = Math.floor(leftYear / reqDay);
    var hour = Math.floor(leftDay / reqHour);
    var minute = Math.floor(leftHour / reqMinute);
    var second = Math.floor(leftMinute / reqSecond);
    // Create array to store the value of year, day, hour, minute and second that larger than 1 
    var array = [];
    // Make condition for creating the unit label if the counter is plural
    if (year !== 0) {
        if (year === 1) {
            array.push(year + " year");
        } else {
            array.push(year + " years");
        }
    }
    if (day !== 0) {
        if (day === 1) {
            array.push(day + " day");
        } else {
            array.push(day + " days");
        }
    }
    if (hour !== 0) {
        if (hour === 1) {
            array.push(hour + " hour");
        } else {
            array.push(hour + " hours");
        }
    }
    if (minute !== 0) {
        if (minute === 1) {
            array.push(minute + " minute");
        } else {
            array.push(minute + " minutes");
        }
    }
    if (second !== 0) {
        if (second === 1) {
            array.push(second + " second");
        } else {
            array.push(second + " seconds");
        }
    }
    // Create variable string to store the final result
    var string = "";
    for (var i = 0; i < array.length; i++) {
        if (i === array.length-2) {
            string = string + array[i] + " and ";
        } else if (i === array.length-1) {
            string = string + array[i];
        } else {
            string = string + array[i] + ", ";
        }
    }
    // If seconds is 0 then return now, otherwise return string
    if (seconds === 0) {
        return "now";
    } else {
        return string;
    }
}  

console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(86401)); // "1 day and 1 second"
console.log(formatDuration(31536001+86401)); // "1 year, 1 day and 2 seconds"


// TEST CASE
// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

// BEST SOLUTION
// function formatDuration (seconds) {
//     var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//         res = [];

//     if (seconds === 0) return 'now';

//     for (var key in time) {
//         if (seconds >= time[key]) {
//         var val = Math.floor(seconds/time[key]);
//         res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//         seconds = seconds % time[key];
//         }
//     }

//     return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }