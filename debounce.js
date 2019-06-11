var debounce = function(delay, execFunction) {
  var timeout;
  return function(arg) {
      if(timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(function() {
        execFunction();
      }, delay);
  }
}

function print() {
  console.log('In print');
}

var debounced = debounce(5000, print);

setTimeout(function() {
  debounced();
}, 1000);
setTimeout(function() {
  debounced();
}, 2000);
setTimeout(function() {
  debounced();
}, 4000);
setTimeout(function() {
  debounced();
}, 10000);


//Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. 
//For example, “execute this function only if 100 milliseconds have passed without it being called.”
//Scenario 1: Triggering element repositioning on window resize 
//Scenario 2: Triggering search on user input in huge data
