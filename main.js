/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)





// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt



// 1 knop frontend 
// Stap 1: querySelector
// let scaleLink = document.querySelector...
let frontendLink = document.querySelector('a[href="#frontend"]')
// console.log('a[href="#frontend"]')

// Stap 2: addEventListener
// scaleLink.addEventListener...
frontendLink.addEventListener("click", scaleHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...
function scaleHandler() {
  frontendLink.classList.toggle("scale")
}

frontendLink.addEventListener("animationend", scaleHandler)





// 3 knop & 
// Stap 1: querySelector
let andLink = document.querySelector('a[href="#and"]')

// Stap 2: addEventListener
andLink.addEventListener("click", translateHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function translateHandler() {
  andLink.classList.add("translateLR")
}

andLink.addEventListener("animationend", function () {
  andLink.classList.remove("translateLR")
})





// 4 knop development
// Stap 1: querySelector
let developmentLink = document.querySelector('a[href="#development"]')

// Stap 2: addEventListener
developmentLink.addEventListener("dblclick", shakeHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function shakeHandler() {
  developmentLink.classList.add("shakedown")
}

developmentLink.addEventListener("animationend", function () {
  developmentLink.classList.remove("shakedown")
})





// 5 knop sprint-5
// Stap 1: querySelector
let sprint5Link = document.querySelector('a[href="#sprint-5"]')

// Stap 2: addEventListener
sprint5Link.addEventListener("focus", sprint5Handler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function sprint5Handler() {
  sprint5Link.classList.add("kleurSprint5")
}

sprint5Link.addEventListener("animationend", function () {
  sprint5Link.classList.remove("kleurSprint5")
})





// 6 knop Fix
// Stap 1: querySelector
let fixLink = document.querySelector('a[href="#fix"]')

// Stap 2: addEventListener
fixLink.addEventListener("mouseenter", fixEnterHandler)
fixLink.addEventListener("mouseleave", fixLeaveHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function fixEnterHandler() {
  fixLink.innerText = "Bar le Duc"
}

function fixLeaveHandler() {
  fixLink.innerText = "Fix"
}





// 7 knop The
// Stap 1: querySelector
let theLink = document.querySelector('a[href="#the"]')

// Stap 2: addEventListener (niet nodig, animatie gaat via :hover)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
theLink.classList.add("flipHover")

// Extra fix zodat hij niet dubbel flipt (laat deze maar, geen comment nodig)
theLink.addEventListener("mouseenter", function () {
  if (theLink.classList.contains("isFlipping")) return
  theLink.classList.add("isFlipping")
})

theLink.addEventListener("animationend", function () {
  theLink.classList.remove("isFlipping")
})





// 8 knop Flow
// Stap 1: querySelector
let flowLink = document.querySelector('a[href="#flow"]')

// Stap 2: addEventListener
flowLink.addEventListener("mousedown", flowDownHandler)
flowLink.addEventListener("mouseup", flowUpHandler)
flowLink.addEventListener("mouseleave", flowUpHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function flowDownHandler() {
  flowLink.classList.remove("flipTerug")
  flowLink.classList.add("flip")
}

function flowUpHandler() {
  flowLink.classList.remove("flip")
  flowLink.classList.add("flipTerug")
}

// Extra: class weer verwijderen aan einde
flowLink.addEventListener("animationend", function () {
  flowLink.classList.remove("flipTerug")
})

// 9 knop User
// Stap 1: querySelector
let userLink = document.querySelector('a[href="#user"]')

// Stap 2: addEventListener
document.addEventListener("keyup", function (event) {

  // altijd eerst oude kleuren weghalen
  userLink.classList.remove("user-a", "user-b", "user-c")

  // letter naar lowercase MDN bron 
  let letter = event.key.toLowerCase()

  // Stap 3: classList -> "user-" + letter
  userLink.classList.add("user-" + letter)
})

// 10 knop Interface
// Stap 1: querySelector
let interfaceLink = document.querySelector('a[href="#interface"]')

// Stap 2: addEventListener
document.addEventListener("keydown", interfaceDownHandler)
document.addEventListener("keyup", interfaceUpHandler)

// Stap 3: classList (.add(), .remove())
function interfaceDownHandler() {
  interfaceLink.classList.remove("ballonLeeg")
  interfaceLink.classList.add("ballonOp")
}

function interfaceUpHandler() {
  interfaceLink.classList.remove("ballonOp")
  interfaceLink.classList.add("ballonLeeg")
}



