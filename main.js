const btn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')
const arrow = document.querySelector('.arrow')

btn.addEventListener('click', clickBtn)
arrow.addEventListener('click', clickArrow)

function clickBtn() {
  menu.classList.add('menu--active')
}

function clickArrow() {
  menu.classList.remove('menu--active')
}