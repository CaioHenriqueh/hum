const container = document.querySelector(".container")
const noButton = document.getElementById("no-button") 
const yesButton = document.getElementById("yes-button") 
const text = document.querySelector(".pedido");
const img = document.querySelector(".img")

// Posição do botão
let bntX = parseInt(getComputedStyle(noButton).left)
let bntY = parseInt(getComputedStyle(noButton).top)

console.log(`X: ${bntX}, Y: ${bntY}`)

// Tamanho do container
let containerWidth = parseInt(getComputedStyle(container).width)
let containerHeight = parseInt(getComputedStyle(container).height)

console.log(`W: ${containerWidth}, H: ${containerHeight}`)


noButton.addEventListener("click", () => {

  alterandoPosicao(noButton, containerHeight, containerWidth)

  // Conferindo informações

  console.log(bntX, bntY)
})
yesButton.addEventListener("click", () => {

  noButton.style.display = "none"
  yesButton.style.display = "none"
  text.classList.add("inovate")
  text.innerHTML = "Eu te amo tanto,eu vou tratar nosso namoro sempre como o inicio,assim nunca vai ter um fim!"
  img.style.display = "block"

})
noButton.addEventListener("pointermove", () => {

  alterandoPosicao(noButton, containerHeight, containerWidth)

  // Conferindo informações

  console.log(bntX, bntY)
})






function alterandoPosicao(elemento, height, width){

  let heightRandom = (Math.random() * (height - 0)).toFixed(0) + "px";
  let widthRandom = (Math.random() * ((width - 60) - 0)).toFixed(0) + "px";

  if (bntX >= 0 && bntX <= containerWidth && bntY >= 0 && bntY <= containerHeight){

    elemento.style.left = widthRandom
    elemento.style.top = heightRandom 
  
  } else {
  
    elemento.style.left = "0px"
    elemento.style.top = "0px"
  
  }

}
