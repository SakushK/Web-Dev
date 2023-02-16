//Task1
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
//Task2 rewrite the function using ? or ||
// ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
//OR
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }
//Task 3 min(a,b)
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

//Task 4 pow(x,n)
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
