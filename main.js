const cards = document.querySelectorAll('.card')
const changeActive = (e) => {
    e.currentTarget.classList.toggle('card_active')
    cards.forEach(el => {
        if (e.currentTarget !== el) el.classList.remove('card_active')
    })
}
cards.forEach(el => el.addEventListener('click', changeActive))
