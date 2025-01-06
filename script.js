const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
  const inputValue = Number(inputEl.value)
  inputEl.value = ""
  render(inputValue)
})

function render(inputValue) {
  lengthEl.textContent = `${inputValue} meter = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meter`
  volumeEl.textContent = `${inputValue} liter = ${(inputValue * 0.264).toFixed(3)} gallon | ${inputValue} gallon = ${(inputValue / 0.264).toFixed(3)} liter`
  massEl.textContent = `${inputValue} kilogram = ${(inputValue * 2.204).toFixed(3)} pound | ${inputValue} pound = ${(inputValue / 2.204).toFixed(3)} kilogram`
}







// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound