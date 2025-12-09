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
  andLink.classList.add("translate")
}

andLink.addEventListener("animationend", function () {
  andLink.classList.remove("translate")
})



// 4 knop development

// Stap 1: querySelector
let developmentLink = document.querySelector('a[href="#development"]')

// Stap 2: addEventListener
developmentLink.addEventListener("dblclick", shakeHandler)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function shakeHandler() {
  developmentLink.classList.add("shake")
}

developmentLink.addEventListener("animationend", function () {
  developmentLink.classList.remove("shake")
})



// 5 knop sprint-5
// Stap 1: querySelector
let sprint5Link = document.querySelector('a[href="#sprint-5"]')

// Stap 2: addEventListener
sprint5Link.addEventListener("click", sprint5Handler)

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

