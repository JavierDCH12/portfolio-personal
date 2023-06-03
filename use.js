window.onload = function () {

    webTitle();
    myName();
  
  
    function webTitle() {
    setTimeout(function () {
      document.getElementById("welcome-text").style.display = "block";
    }, 5000);
  }

  function myName() {
    const title = document.getElementById("title");
    const titleText = title.innerText;
    title.innerText = "";
  
    let index = 0;
    const interval = setInterval(() => {
      if (titleText[index] == " ") {
        title.innerText += " ";
        index++;
      }
      title.innerText += titleText[index];
      index++;
  
      if (index === titleText.length) {
        clearInterval(interval);
      }
    }, 200);
  }

















  
};
