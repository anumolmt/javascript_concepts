var throttle = function(delay, execFunction) {
  var lastExeTime = 0;
  return function(arg) {
    var currentTime = Date.now();
    if(currentTime - lastExeTime > delay) {
      execFunction(arg);
      lastExeTime = currentTime;
    }
    return;
  }
}

function print() {
  console.log('In print');
}

var throttled = throttle(5000, print);

setInterval(function() {
  throttled();
}, 100);

//By using throttle, we don’t allow to our function to execute more than once every X milliseconds.
//Scenario 1: Logging log data to server every n millisecs
