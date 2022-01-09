/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
    setTimeout(() => console.log('welcome'), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
    console.log('hello');
    setTimeout(() => console.log('good bye'), 1000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

// Approach 1
function brokenRecord() {
    setInterval(() => console.log('hi'), 1000);
}

// Approach 2
// function brokenRecord() {
//     setTimeout(() => {
//         console.log('hi');
//         brokenRecord();
//     }, 1000);
// }

// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

// Approach 1
// function limitedRepeat() {
//     let count = 0;
//     const timer = setInterval(() => {
//         console.log('hi');
//         if(++count === 5) clearInterval(timer);
//     }, 1000);
// }

// Approach 2
function limitedRepeat() {
    for(let i=1; i<=5; ++i)
        setTimeout(() => console.log('hi'), i * 1000);
}

// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs() {
    const args = Array.from(arguments);
    const [func, interval, duration] = args;
    intervalId = setInterval(func, interval * 1000);
    setTimeout(() => clearInterval(intervalId), duration * 1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
// Expectation: theEnd() function is pushed to callback queue after every interval * 1000 milliseconds by the browser API that handles setInterval
// Expected the message to be printed 10 times but it is printed only 9 times, need to look into the inner working of event loop and task queue with setInterval


/* CHALLENGE 7 */

function delayCounter(target, wait) {
    let count = 1;
    return () => {
        const timer = setInterval(() => {
            console.log(count++);
            if (count > target) {
                clearInterval(timer);
                count = 1;
            }
        }, wait);
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised (val) {
    return new Promise(res => setTimeout(() => res(val), 2000));
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
    constructor(cb) {
        this.cb = cb;
        this.value = 0;
    }
    start() {
        this.timer = setInterval(() => {
            this.value++;
            if (this.value === 61) this.value = 1;
            this.cb(this.value);
        }, 1000);
    }
    reset() {
        clearInterval(this.timer);
        this.value = 0;
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 65 seconds.");
// }, 65000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
    let shouldRun = true;
    let timer = null;
    return () => {
        if (shouldRun) {
            shouldRun = false;
            return callback();
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            shouldRun = true;
        }, interval);
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'


