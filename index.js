var random1 = Math.floor(Math.random() * 6)+1;
var randomImage = "dice"+random1+".png";
var randomImage1 = "images/" +randomImage;
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src" , randomImage1);


var random2 = Math.floor(Math.random() * 6)+1;
var randomImage = "dice"+random2+".png";
var image2 = "images/"+randomImage;
document.querySelectorAll("img") [1].setAttribute("src" , image2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = ("🥇Player1 Wins");
}else if(random1 === random2){
    document.querySelector("h1").innerHTML = ("🥇Draw🥇");
} else{
    document.querySelector("h1").innerHTML = ("Player2 Wins🥇")
}

