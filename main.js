/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1
let designLink = document.querySelector('a[href="#design"]')

// Stap 2
designLink.addEventListener('click', jumpHandler)

// Stap 3
function jumpHandler() {
  designLink.classList.toggle('jump')
}

// Extra
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

// Extra
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

// Extra
developmentLink.addEventListener("animationend", function() {
  developmentLink.classList.remove("shakedown")
})



/* SPRINT 5 - Kleuren animatie */

// Stap 1
let sprint5Link = document.querySelector('a[href="#sprint-5"]')

// Stap 2
sprint5Link.addEventListener('click', sprint5Handler)

// Stap 3
function sprint5Handler() {
  sprint5Link.classList.add('kleurSprint5')
}

// Extra
sprint5Link.addEventListener('animationend', function() {
  sprint5Link.classList.remove('kleurSprint5')
})



/* FIX → BAR LE DUC */

// Stap 1
let fixLink = document.querySelector('a[href="#fix"]')

// Stap 2 — hover is CSS, niet JS

// Stap 3
fixLink.classList.add("barLeDucHover")

// Hover → verander tekst
fixLink.addEventListener("mouseenter", function() {
  fixLink.innerText = "Bar le Duc"
})

// Mouse weg → terug naar Fix
fixLink.addEventListener("mouseleave", function() {
  fixLink.innerText = "Fix"
})
