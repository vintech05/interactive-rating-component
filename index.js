const submitBtn = document.querySelector('.submit-button')
const editBtn = document.querySelector('.edit-btn')
const thanksCards = document.querySelector('.thank-you-card')
const ratingCards = document.querySelector('.rating-card')
const ratingResult = document.querySelector('.rating-result')
const title = document.querySelector('.title')
const numOne = document.querySelector('.num-1')
const numTwo = document.querySelector('.num-2')
const numThree = document.querySelector('.num-3')
const numFour = document.querySelector('.num-4')
const numFive = document.querySelector('.num-5')

submitBtn.addEventListener('click', (e) => {
    thanksCards.style.display = 'block'
    ratingCards.style.display = 'none'

    ratingResult.style.color = 'hsl(25, 97%, 53%)'
    ratingResult.style.backgroundColor = 'hsla(216, 12%, 54%, 0.107)'
    ratingResult.style.borderRadius = '2em'
});

editBtn.addEventListener('click', (e) => {
    thanksCards.style.display = 'none'
    ratingCards.style.display = 'block'
});

numOne.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 1 out of 5'
    ratingResult.style.color = 'white'
    submitBtn.style.display = 'block'

    title.textContent = 'Very Bad';
    title.style.fontWeight = '700'
    title.style.fontSize = '2em'
});

numTwo.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 2 out of 5'
    ratingResult.style.color = 'white'
    
    submitBtn.style.display = 'block'

    title.textContent = 'Bad'
    title.style.fontWeight = '700'
    title.style.fontSize = '2em'
});

numThree.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 3 out of 5'
    ratingResult.style.color = 'white'
    submitBtn.style.display = 'block'

    title.textContent = 'Good'
    title.style.fontWeight = '700'
    title.style.fontSize = '2em'
});

numFour.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 4 out of 5'
    ratingResult.style.color = 'white'
    submitBtn.style.display = 'block'

    title.textContent = 'Great'
    title.style.fontWeight = '700'
    title.style.fontSize = '2em'
});

numFive.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 5 out of 5'
    ratingResult.style.color = 'white'
    submitBtn.style.display = 'block'

    title.textContent = 'Perfect!'
    title.style.fontWeight = '700'
    title.style.fontSize = '2em'
});

