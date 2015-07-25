function setup() {
  
  var toggle = document.getElementById('toggle')
  toggle.addEventListener('click', function() {
    var menu = document.getElementById('menu');
    alert('hell0');
    menu.classList.toggle('collapsed');
    //toggle:if exists, create, else remove
  });
  //1.type of event
  //2. *objects are functions in js
}