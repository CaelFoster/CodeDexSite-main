const landingModule = document.querySelector('.landing')
const cards = landingModule.querySelectorAll('.card')

if (cards.length > 0) {
	cards[0].classList.add('active')
}
cards.forEach(card => {
	card.addEventListener('click', e => {
		cards.forEach(c => c.classList.remove('active'))
		card.classList.add('active')
		card.style.setProperty('--answer-height', `${card.scrollHeight}px`)
	})
})
window.addEventListener('resize', () => {
	cards.forEach(card => {
		card.style.setProperty('--answer-height', `auto`)
		card.style.setProperty('--answer-height', `${card.scrollHeight}px`)
	})
})