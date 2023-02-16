//Task 1 
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); 
// Error: Cannot read property 'name' of undefined

// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this;
//       }
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref().name ); // John

//Task 2:calculator
let calculator = {
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    },
    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

//Task 3 chaining
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder
    .up()
    .up()
    .down()
    .showStep()// shows 1
    .down()
    .showStep(); // then 0
