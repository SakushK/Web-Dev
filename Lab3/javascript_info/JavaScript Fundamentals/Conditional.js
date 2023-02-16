//Task 1
if ("0") {
  alert( 'Hello' ); // it will work because any string except empty will be true
}

//Task 2
let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//Task 3
let result=(a+b<4) ? 'Below' : 'Over';

//Task 4
let message=(login=='Emplotee') ? 'Hello' :
    (login=='Director') ? 'Greetings' :
    (login=='') ? 'No login' :
    '';
