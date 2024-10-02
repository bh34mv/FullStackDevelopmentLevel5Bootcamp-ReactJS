// Functions.
let add = function() {
    console.log('Now adding numbers');
    const five = 3 + 2;
    };

function performTask(task) {
    task();
    console.log('Task performed!');
    }

performTask(add);

function foo() {
    return function() {
        console.log('What gets printed?');
        };
    }

foo
foo();
foo()();

// Variables are immutable.
let a = 4;

a = 2; // Mutates 'a',

let b = [1, 2, 3];

b.push(4); // Mutates 'b'.

let c = [...b, 4]; // Does not mutate 'b'.

// Functions have no side effects.
const b = [];

function hasSideEffects() {
    b = [0];
    }