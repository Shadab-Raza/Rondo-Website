const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbar = document.getElementsByClassName("navbar")[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
});


// ContactForm JS
const scriptURL = "https://script.google.com/macros/s/AKfycbxl1OxL8RYVwuBv-pKtOEL3LenkCYKfkFlrTQWg2dyZZknRUYfK-Iqwacn-KAHvJahhIw/exec"
const form = document.forms['Contact-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body : new FormData(form)})
        .then(response => alert('Thanks for Contacting us..! We Will Contact You Soon...'))
        .catch(error => console.error('Error!', error.message))
});
