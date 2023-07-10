var randomNo1= Math.random();
randomNo1=Math.floor(randomNo1*3)+1;
var randomimg1= "img"+randomNo1+".png";
document.querySelector(".one>img").setAttribute("src",randomimg1);
var randomNo2= Math.random();
randomNo2=Math.floor(randomNo2*3)+1;
var randomimg2= "img"+randomNo2+".png";
document.querySelector(".two>img").setAttribute("src",randomimg2);
