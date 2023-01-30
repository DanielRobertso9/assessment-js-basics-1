///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

var totalAcres = 0;

for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres = totalAcres + fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log("Total Acres: " + totalAcres);

// I used a loop that will take the value of totalAcres and adds together each value of all 3 orchards, once the cycle is complete i takes the new value of
//totalAcres and adds the next set of values within all 3 arrays

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

var averageDailyAcres = totalAcres / 7;
console.log("Average Daily Acres: " + averageDailyAcres);

// I created the variable averageDailyAcres and had it equal the total acres i got from above
// and divided that by 7 (total number of days in a week) this giving us the average harvested per day

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

for (let i = 0; acresLeft = 0; i++) {
  days = days + 1;
  acresLeft = acresLeft - averageDailyAcres;
}
console.log("Total days to complete: " + days);

// I created a lop that would take the amount of acres left to harvest and on each loop it will minus it by the
// average acres we calculated about, also adding a value of 1 to the days, this loop will continue its cycle until
// the value of acresLeft is less then or equal to 0. this will then give us the total number of days/cycles to get 0

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * 6.5);
}

for (let i = 0; i < galaAcres.length; i++) {
  galaTons.push(galaAcres[i] * 6.5);
}

for (let i = 0; i < pinkAcres.length; i++) {
  pinkTons.push(pinkAcres[i] * 6.5);
}

console.log("Fuji tons per day: " + fujiTons);
console.log("gala tons per day: " + galaTons);
console.log("pink tons per day: " + pinkTons);

// I created a loop and on each pass it will take the value of the array and times it by 6.5 and push it to
// the new varible giving us a new array listing the tons per day.

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let totFujiTons = 0;
let totGalaTons = 0;
let totPinkTons = 0;

for (let i = 0; i < fujiTons.length; i++) {
  totFujiTons = totFujiTons + fujiTons[i];
}

for (let i = 0; i < galaTons.length; i++) {
  totGalaTons = totGalaTons + galaTons[i];
}

for (let i = 0; i < pinkTons.length; i++) {
  totPinkTons = totPinkTons + pinkTons[i];
}

let fujiPounds = totFujiTons * 2000;
let galaPounds = totGalaTons * 2000;
let pinkPounds = totPinkTons * 2000;

console.log("Total Fuji Pounds: " + fujiPounds);
console.log("Total Gala Pounds: " + galaPounds);
console.log("Total Pink Pounds: " + pinkPounds);

// I created a loop that on each pass it takes varible tot****Tons and add in a value from the ****Tons array,
// on each pass it adds in the next value of each array giving us the total. once i have the total in tons i created
// another varible where it equals the total tons times it by 2000 (Amount of lbs in a ton) giving us the total pounds per orchard.

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log("Total Fuji Profit: " + fujiProfit);
console.log("Total Gala Profit: " + galaProfit);
console.log("Total Pink Profit: " + pinkProfit);

// I created a varible that takes the total pounds per orchard and times it by the price per pound for each type
// giving us the total profit for each orchard

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log("Total Profit: " + totalProfit);

// I created a varible totalProfit that adds togethe the total profit from each orchard giving us the overall profit for all 3 orchards
