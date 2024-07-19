
let bg1 = document.querySelector(".box1")
let bg2 = document.querySelector(".box2")
let bg3 = document.querySelector(".box3")
let bg4 = document.querySelector(".box4")
let bg5 = document.querySelector(".box5")

// for Background-Color
let n1 = Math.floor(Math.random()*255)
let n2 = Math.floor(Math.random()*255)
let n3 = Math.floor(Math.random()*255)

// for Text-Color
let n4 = Math.floor(Math.random()*255)
let n5 = Math.floor(Math.random()*255)
let n6 = Math.floor(Math.random()*255)

// Background-Color of the boxes
document.querySelector(".box1").style.backgroundColor = `rgb(${n1}, ${n2}, ${n3})`
document.querySelector(".box2").style.backgroundColor = `rgb(${n1}, ${n3}, ${n2})`
document.querySelector(".box3").style.backgroundColor = `rgb(${n2}, ${n3}, ${n1})`
document.querySelector(".box4").style.backgroundColor = `rgb(${n2}, ${n1}, ${n3})`
document.querySelector(".box5").style.backgroundColor = `rgb(${n3}, ${n2}, ${n1})`

// Color of text inside the box
document.querySelector(".box1").style.color = `rgb(${n4}, ${n5}, ${n6})`
document.querySelector(".box2").style.color = `rgb(${n5}, ${n6}, ${n4})`
document.querySelector(".box3").style.color = `rgb(${n6}, ${n4}, ${n5})`
document.querySelector(".box4").style.color = `rgb(${n5}, ${n4}, ${n6})`
document.querySelector(".box5").style.color = `rgb(${n4}, ${n6}, ${n5})`