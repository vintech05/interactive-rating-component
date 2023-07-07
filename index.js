const submitBtn = document.querySelector('.submit-button')
const thanksCards = document.querySelector('.thank-you-card')
const ratingCards = document.querySelector('.rating-card')
const ratingResult = document.querySelector('.rating-result')
const numOne = document.querySelector('.num-1')
const numTwo = document.querySelector('.num-2')
const numThree = document.querySelector('.num-3')
const numFour = document.querySelector('.num-4')
const numFive = document.querySelector('.num-5')

submitBtn.addEventListener('click', (e) => {
    thanksCards.style.display = 'block'
    ratingCards.style.display = 'none'
});

numOne.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 1 out of 5'
    ratingResult.style.color = 'white'
});

numTwo.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 2 out of 5'
    ratingResult.style.color = 'white'
});

numThree.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 3 out of 5'
    ratingResult.style.color = 'white'
});

numFour.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 4 out of 5'
    ratingResult.style.color = 'white'
});

numFive.addEventListener('click', (e) => {
    ratingResult.textContent = 'You selected 5 out of 5'
    ratingResult.style.color = 'white'
});

