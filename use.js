window.onload = function () {

    webTitle();
    myName();
  
  
    function webTitle() {
    setTimeout(function () {
      document.getElementById("welcome_h1").style.display = "block";
    }, 8000);
  }

  function myName() {
  


    var titleElement = document.getElementById('title');
      var titleText = "Javier Delgado Chacón";
      var characters = titleText.split('');
      titleElement.innerHTML = ""; // Vaciar el contenido inicialmente

      for (var i = 0; i < characters.length; i++) {
        setTimeout(function(character) {
          titleElement.innerHTML += character;
        }, 200 * i, characters[i]);
      }
  }

















  
};
