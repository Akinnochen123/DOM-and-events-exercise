/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Exercise</title>
    <style>
        div {
          width: 50px;
          height: 50px;
          display: inline-block;
        }
        .brown{
          background-color: brown;
        }
        .green{
          background-color: green;
        }
        .blue{
          background-color: blue;
        }
        .purple{
          background-color: purple;
        }
        .yellow{
          background-color: yellow;
        }
        .car1 {
         background-color: #8C9C12;
        }
        .car2 {
         background-color: #1DA788;
        }
        .car1, .car2 {
            margin-left: 0;
        }
    </style>
</head>
<body>
    <h1 id="change_heading">Change Me!</h1>
    SELECTED COLOR <span class="selected">None!</span>
    <section>
        <div class="brown"></div>
        <div class="green"></div>
        <div class="blue"></div>
        <div class="yellow"></div>
    </section>
    <h2>Race!</h2>
    <button>Start the race!</button>
    <br>
    <div class="car1"></div>
    <br>
    <div class="car2"></div>
    <script src="script.js"></script>
</body>
</html>*/

//question 1
window.onload = function(){

}

//question2
window.onload = function(){
  var replaceText = document.getElementById("change_heading");
  replaceText.innerText = "Hello world!";
}

//question3
window.onload = function(){
  var replaceText = document.getElementById("change_heading");
  replaceText.innerText = "Hello world!";

  var section = document.querySelector("section");
  section.addEventListener("mouseover", function(event){
      var selectedColor = document.querySelector('.selected');
      selectedColor.innerText = event.target.className;
  })
}

//question4
var newDiv = document.createElement("div")

//question 5
newDiv.className = 'purple'
newDiv.backgroundColor = 'purple'

//question 6
var section = document.querySelector('section')
section.appendChild(newDiv)

