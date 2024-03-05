// const article = document.querySelector('article')

// console.log(article)

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-child')
// })

// console.log(article.children)


const title = document.querySelector('h2')

console.log(title.parentElement.parentElement)

console.log(title.previousSibling)
console.log(title.nextElementSibling.parentElement.children)

// nextElementSibling uzidan kengi kelyotgan elementni tutish uchun qulaniladi
// previousSibling uzidan oldin  kelayotgan elementni tutish uchun ishlatiladi
// children elementning ichidagi farzandlarini kurish uchun qulaniladi