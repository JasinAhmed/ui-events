/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de click-event toe
designLink.addEventListener('click', jumpHandler)

// Callback functie
function jumpHandler() {
  designLink.classList.toggle('jump')
}

// Extra: class verwijderen na animatie zodat hij opnieuw werkt
designLink.addEventListener('animationend', jumpHandler)



/* FRONTEND - Scale animatie */

// Stap 1
let scaleLink = document.querySelector('a[href="#frontend"]')

// Stap 2
scaleLink.addEventListener('click', scaleHandler)

// Stap 3
function scaleHandler() {
  scaleLink.classList.add('scale')
}

// Extra: class verwijderen
scaleLink.addEventListener('animationend', function() {
  scaleLink.classList.remove('scale')
})



/* AND - Translate animatie */

// Stap 1
let translateLink = document.querySelector('a[href="#and"]')

// Stap 2
translateLink.addEventListener('click', translateHandler)

// Stap 3
function translateHandler() {
  translateLink.classList.add('translateLR')
}

// Extra
translateLink.addEventListener('animationend', function() {
  translateLink.classList.remove('translateLR')
})



/* DEVELOPMENT - Shakedown animatie (DOUBLE CLICK!) */

// Stap 1
let developmentLink = document.querySelector('a[href="#development"]')

// Stap 2
developmentLink.addEventListener("dblclick", devHandler)

// Stap 3
function devHandler() {
  developmentLink.classList.add("shakedown")
}

// Extra: class verwijderen
developmentLink.addEventListener("animationend", function() {
  developmentLink.classList.remove("shakedown")
})
