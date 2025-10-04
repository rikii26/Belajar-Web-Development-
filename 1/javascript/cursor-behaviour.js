const cursorContainer = document.getElementById("c-container")
const cursorRing = document.getElementById("c-ring")
const cursorPointer = document.getElementById("c-point")

let positionX;
let positionY;

document.addEventListener("mousemove", (e) => {
    positionX = e.clientX
    positionY = e.clientY

    cursorContainer.style.top = `${positionY}px`
    cursorContainer.style.left = `${positionX}px`
    cursorContainer.style.transform = "translate(-50%, -50%)"
})

document.addEventListener("mouseenter", ()=>{
    cursorContainer.style.display = "block"
})

document.addEventListener("mouseleave", ()=>{
    cursorContainer.style.display = "none"
})

