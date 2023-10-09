


function changeColorBlue(){
    document.querySelector('.header').style.color = 'blue';
  }

  function changeColorGreen(){
    document.querySelector('.header').style.color = 'Green';
  }

  function changeTheme(){
    document.querySelector('.header').style.color = 'orange';
    document.querySelector('.header').style.background = 'black';
    document.querySelector('.navbar').style.background= 'orange';
    

  }
  
  var colors = [, "red", "green",
  "aqua", "blue", "black", "purple", "orange"];

function ColorSwap(){
  console.log("text is hovered");

  document.querySelector(".box3").style.background = colors[(Math.floor(Math.random() * colors.length))];
  document.querySelector(".navbar").style.background = document.querySelector(".box3").style.background
}

const indic = document.getElementById(".event4");

window.addEventListener("scroll", () =>{
      console.log("scrolling")
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
     const scrolled= window.scrollY;
     console.log(scrollable)
     if(Math.ceil(scrolled)===scrollable){
      alert("You have reached the bottom of the page");
     }
    

});

function doubleClick(){
  document.querySelector('.header').style.color = 'black';
    document.querySelector('.header').style.background = '#adadad';
    document.querySelector('.navbar').style.background= '#190aa5';
}
