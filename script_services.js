const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbar = document.getElementsByClassName("navbar")[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
});




// FQA ContactForm JS
const scriptURL = "https://script.google.com/macros/s/AKfycbyQnriEIRmu11vj30WAToY_nsQRvrsjrPHyKM-BdGoDb-ptqH50wR6MoCTWXkne5iKglA/exec"
const form = document.forms['Service-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body : new FormData(form)})
        .then(response => alert('Thanks for Contacting us..! We Will Contact You Soon...'))
        .catch(error => console.error('Error!', error.message))
});