const btnRight = document.querySelector('.btn-arrow.-right')
const btnLeft = document.querySelector('.btn-arrow.-left')
const element = document.querySelector('.elements')

let count = 0
btnRight.addEventListener('click', () => {
    count += 100
    element.style = `transform: translateX(${count}px)`
})

btnLeft.addEventListener('click', () => {
    count -= 100
    element.style = `transform: translateX(${count}px)`
})