//const

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const btnOpen = document.querySelector('#btnOpen')
const btnAgain = document.querySelector('#btnAgain')



let openCookieMessage = [
        "Don't let your dreams be dreams",
        "Patience is power",
        "Better days are on the way, just wait",
        "Alone can be beautiful",
        "A good life need some bad days too",
        "When you change your thoughts, remember to also change your world.",
        "It is better to fail in originality than to succeed in imitation.",
        "Do not let yesterday take up too much of today."
]

//events
btnOpen.addEventListener('click' ,toggleScreen)
btnOpen.addEventListener('click' , ramdonMessage)
btnAgain.addEventListener('click', toggleScreen)

//functions

function toggleScreen (){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}


function ramdonMessage (){
    

    let ramdomNumber = Math.floor(Math.random() * openCookieMessage.length)


    screen2.querySelector('p').innerText = openCookieMessage[ramdomNumber]

}