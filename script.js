const inputBox = document.querySelector('#input')
const paragraph = document.getElementById('p')
const addButton = document.getElementById('add')

inputBox.onchange = inputHandler

function inputHandler(){
  console.log(inputBox.value)
  paragraph.innerHTML =  inputBox.value
  inputBox.value =''
}

//addButton.onclick = inputHandler

function onFocusFn(){
  inputBox.style.border = '4px solid red'
}
function onBlurFn(){
  inputBox.style.border = ''
}
inputBox.onfocus = onFocusFn
inputBox.onblur = onBlurFn

////////////////////////////////////////////////
// CALCULATOR
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const addBtn = document.getElementById('add2')
const result = document.getElementById('result') 


function handleAdd() {
  result.innerHTML = num1.value * 1 + num2.value * 1
}
addBtn.onclick = handleAdd
// COMPLETE OPERATIONS HERE........

/////////////////////////////////////////////////
//RANDOM NUMBER

const randNumber = document.getElementById('randNum')
const randomBtn = document.getElementById('randBtn')
randomBtn.onclick = handleRandNum
function handleRandNum(){
 randNumber.innerHTML= Math.floor(Math.random()*100)
}

////////////////////////////////////////
// DARK/LIGHT MODE

const dark = document.getElementById('toDark')
const light = document.getElementById('toLight')

dark.onclick = darkMode
light.onclick = lightMode

function darkMode(){
  document.body.style.backgroundColor = 'black'
  document.body.style.color = 'white'
}
function lightMode(){
  document.body.style.backgroundColor = 'white'
  document.body.style.color = 'black'
}