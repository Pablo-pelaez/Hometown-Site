let jbtn = document.querySelector('.btn')
let targetElement = document.querySelector('#main')

jbtn.addEventListener("click", () => {
    targetElement.scrollIntoView({ behavior: "smooth" })
})
