// Promise.resolve().then(()=>{
//     console.log("I am promise!!");
// })
// console.log("console.log 1");
// process.nextTick(()=>{
//     console.log("i am nextTick queue");

// })


// console.log("console.log 2");









// process.nextTick(() => console.log("this is process.nextTick 1"));

// process.nextTick(() => {
//     console.log("this is process.nextTick 2");
//     process.nextTick(() =>
//         console.log("this is the inner next tick inside next tick")
//     );
// });

// process.nextTick(() => console.log("this is process.nextTick 3"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//     console.log("this is Promise.resolve 2");
//     process.nextTick(() =>
//         console.log("this is the inner next tick inside Promise then block")
//     );
// });

// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));










// console.log('Hello => number 1');

// setImmediate(() => {
//   console.log('Running before the timeout => number 3');
// });

// setTimeout(() => {
//   console.log('The timeout running last => number 4');
// }, 0);

// process.nextTick(() => {
//   console.log('Running at next tick => number 2');
// });
