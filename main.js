(function() {
  var interval = setInterval(function() {
    postMessage("Still Here");
  }, 1000);
  while(true) {
    Math.random() * Math.random();
  }
}());
