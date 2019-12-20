console.log('Client sode Javascript file is loaded');
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    if (!location) return console.log('Location must not be ' + location);  

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((res) => {
        res.json().then((data) => {

            if (data.error) {
                const errorMsg = 'An error has occured, try another location'
                messageOne.textContent = errorMsg
                console.log(errorMsg);
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data);
            }
        })
    })

})