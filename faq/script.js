const faq = {
    questions:[
        window.document.querySelector('div#first'),
        window.document.querySelector('div#second'),
        window.document.querySelector('div#third'),
        window.document.querySelector('div#fourth')
    ],
    answer:[
        window.document.querySelector('article#first'),
        window.document.querySelector('article#second'),
        window.document.querySelector('article#third'),
        window.document.querySelector('article#fourth')
    ]
}

for (let index in faq.questions) {
    faq.questions[index].addEventListener('click', ()=>{
        answerShower(index)
    })
}

function answerShower(numberQquestion) {
    faq.answer[numberQquestion].classList.toggle(`answer`)
}