(function() {
  var percent = document.querySelector("#percent");

  var worker = document.querySelector("#worker");
  worker.addEventListener('click', function() {
    var worker = new Worker("main.js");
    worker.onmessage = function() {
      console.log(arguments);
    };
  });

  var page = document.querySelector("#page");
  page.addEventListener('click', workFunc);

  function workFunc() {
    var time = new Date().getTime();
    var stopTime = time + 100;
    while(time < stopTime) {
      Math.random() * Math.random();
      time = new Date().getTime();
    }
    console.log("Finished: ", percent.value);
    setTimeout(workFunc, 100 / percent.value * 100);
  }

}());
