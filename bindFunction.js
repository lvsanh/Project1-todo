var module = { //object named module with 2 properties: x and getX()
    x: 42,
    getX: function() {
      return this.x; //return x value in this object, if don't have this. --> Error: x is not defined
    }
  }
  
  var unboundGetX = module.getX; //declare unboundGetX is a function
  
  console.log(typeof(unboundGetX)); //check typeof
  
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  var boundGetX = unboundGetX.bind(module); //declare boundGetX bind
  
  console.log(typeof(boundGetX)); //check typeof
  
  console.log(boundGetX());
  // expected output: 42
  
  //The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.