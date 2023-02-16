//Task 1
let i = 3;

while (i) {
  alert( i-- );
} // 1

//Task 2
let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

let i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5

//Task 3
for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4

for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

//Task 4
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
} // use the for loop to output even numbers from 2 to 10

//Task 5
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

//rewrite
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//Task 6
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//Task 7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) {
    if (i % j == 0)
  }

  alert( i );
}
