let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // createItem(`<li>${ourField.value}</li>`)
    createItem(ourField.value)
})

function createItem(x){
    let ourHTML = `<li> ${x} <button>Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
}