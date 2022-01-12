const left = document.querySelector('.left')
const right = document.querySelector('.right')
const containter = document.querySelector('.container')

left.addEventListener('mouseenter', () => containter.classList.add('hover-left'))
left.addEventListener('mouseleave', () => containter.classList.remove('hover-left'))


right.addEventListener('mouseenter', () => containter.classList.add('hover-right'))
right.addEventListener('mouseleave', () => containter.classList.remove('hover-right'))