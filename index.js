var randomnum1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomnum1+".png";
var imageSource="./images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);

var randomnum2=Math.floor(Math.random()*6)+1;
var imageName="dice"+randomnum2+".png";
var imageSrc="./images/"+imageName;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSrc);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="<em>🚩Player 1 wins!!<em>"
}
else if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="Player2 wins!!🚩"
}
else{
    document.querySelector("h1").innerHTML="<em>Draw!!<em>"
}
