const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }

   
}

 function deleteLast(){
    display.value = display.value.slice(0,-1)
}

const text = "Do  the  Math"
let index = 0

const title = document.getElementById("title")
title.innerText = ""

function typeEffect(){
    if(index < text.length){
        document.getElementById("title").innerText += text.charAt(index)
        index++
        setTimeout(typeEffect,100)
    }
}
typeEffect()