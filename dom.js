/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>*/



//HEAD
//question1
document.getElementById("container");

//question 2
document.querySelector("#container")

//question 3
document.getElementsByClassName("second")

//question 4
document.querySelector("ol .third");

//question 5
var addSection = document.querySelector("#container");
addSection.innerText = "Hello";

//question 6
var footer = document.querySelector(".footer");
footer.classList.add("main");

//question 7
var footer = document.querySelector(".footer");
footer.classList.remove("main");

//question 8
var newList = document.createElement("li");

//question 9
newList.innerText = "four"

//question 10
var list = document.querySelector("ul");
list.appendChild(newList);

//question 11
var liInsideOl = document.querySelectorAll("ol li");
for(var i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = "green";
}

//question 12
var footer = document.querySelector(".footer");
footer.remove();
