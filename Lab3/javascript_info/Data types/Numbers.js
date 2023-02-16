//Task 1
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

//Task 2
alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3

alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

//Task 2
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);

  //Task 3
  let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}
//Task 4
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );// 1.2345623452
  alert( random(1, 5) );// 3.7894332423
  alert( random(1, 5) );// 4.3435234525

  //task5
  function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
    alert( randomInteger(1, 5) ); // 1
    alert( randomInteger(1, 5) ); // 3
    alert( randomInteger(1, 5) ); // 5
