function changeColorBlue(){
    document.querySelector('.box1').style.color = 'blue';
  }

  function changeColorGreen(){
    document.querySelector('.box1').style.color = 'Green';
  }

  function changeTheme(){
    document.querySelector('.header').style.color = 'orange';
    document.querySelector('.header').style.background = 'black';
    document.querySelector('.navbar').style.background= 'orange';
    document.querySelector('.container1').style.color= 'orange';
    document.querySelector('.container1').style.background= 'black';

  }
  
  var colors = [, "red", "green",
  "aqua", "blue", "black", "purple", "orange"];

function ColorSwap(){
  console.log("text is hovered");

  document.querySelector(".box3").style.background = colors[(Math.floor(Math.random() * colors.length))];
}
