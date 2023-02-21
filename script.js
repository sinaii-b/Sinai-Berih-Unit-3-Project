/* Declare variables below to save the different sections (divs) of your story*/
let storyOpenning=document.querySelector(".story-opening");

let button1=document.querySelector(".option-one");
let button2=document.querySelector(".option-two");

let option1screen=document.querySelector(".option-one-screen");
let option2screen=document.querySelector(".option-two-screen");

let option1end=document.querySelector(".option-one-end");
let option2end=document.querySelector(".option-two-end");

let buttons=document.querySelector(".buttons");

let title=document.querySelector(".title");

button1.onclick=function(){
option1screen.style.display="block";
storyOpenning.style.display="none";
buttons.style.display="none";
title.innerHTML="Section2- Yes";
};

button2.onclick=function(){
option2screen.style.display="block";
storyOpenning.style.display="none";
buttons.style.display="none";
title.innerHTML="Section3- No";
};






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


