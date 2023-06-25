const body = document.querySelector("body")
body.style.background = "#652c2c"
const blocks = document.querySelector(".blocks")
blocks.style.display = "flex"
blocks.style.justifyContent = "space-evenly"
blocks.style.alignItems = "center"
blocks.style.padding  = "50px 0"

const block1 = document.querySelector(".block1")
block1.style.borderRadius = '10px'
block1.style.border = "2px solid blue"
block1.style.cursor = "pointer"
block1.style.padding = "15px 50px"
block1.style.fontSize = "20px"
block1.style.color = "white"

block1.style.outline = "none"
block1.style.marginBottom = "20px"
block1.addEventListener("click", () =>{
// box1.style.background = ""
    box1.style.transition = ".4s"
    box1.style.padding = "130px 130px"
    box1.style.transform = "scale(0.9)"
    box1.style.border = "2px dashed  #16FF0AFF"
    box1.style.borderRadius=  "10px"
})
const btn1 = document.querySelector(".btn1")
btn1.style.display =  "flex"
btn1.style.alignItems = "center"
btn1.style.flexDirection = "column"
const box1 =  document.querySelector(".box1")

const block2 = document.querySelector(".block2")
block2.style.borderRadius = '10px'
block2.style.border = "2px solid yellow"
block2.style.cursor = "pointer"
block2.style.padding = "15px 50px"
block2.style.fontSize = "20px"
block2.style.color = "white"

block2.style.outline = "none"
block2.style.marginBottom = "20px"
block2.addEventListener("click", () =>{
// box2.style.background = ""
    box2.style.transition = ".4s"
    box2.style.padding = "130px 130px"
    box2.style.transform = "scale(0.9)"
    box2.style.border = "2px dashed blue"
    box2.style.borderRadius=  "10px"
})
const btn2 = document.querySelector(".btn2")
btn2.style.display =  "flex"
btn2.style.alignItems = "center"
btn2.style.flexDirection = "column"
const box2 =  document.querySelector(".box2")

const block3 = document.querySelector(".block3")
block3.style.borderRadius = '10px'
block3.style.border = "2px solid #0aff00 "
block3.style.cursor = "pointer"
block3.style.padding = "15px 50px"
block3.style.fontSize = "20px"
block3.style.color = "white"

block3.style.outline = "none"
block3.style.marginBottom = "20px"
block3.addEventListener("click", () =>{
    box3.style.transition = ".4s"
    box3.style.padding = "130px 130px"
    box3.style.transform = "scale(0.9)"
    box3.style.border = "2px dashed yellow "
    box3.style.borderRadius =  "10px"
// box3.style.background = ""
})

const btn3 = document.querySelector(".btn3")
btn3.style.display =  "flex"
btn3.style.alignItems = "center"
btn3.style.flexDirection = "column"
const box3 =  document.querySelector(".box3")

block1.style.backgroundColor = "#1fd1f9"
block2.style.backgroundColor = "#1fd1f9"
block3.style.backgroundColor = "#1fd1f9"
block1.style.backgroundImage = "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)"
block2.style.backgroundImage = "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)"
block3.style.backgroundImage = "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)"
