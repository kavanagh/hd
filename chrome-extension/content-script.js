window.addEventListener('load', function () {
  
  setTimeout(function() {
    var script = document.createElement('script');
    script.src = '//reaction-c.herokuapp.com/scripts/main.js';

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '//reaction-c.herokuapp.com/styles/main.css';

    document.body.appendChild(script);
    document.body.appendChild(link);

  }, 1000);

}, false);