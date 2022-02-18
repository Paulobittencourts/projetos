let countDownTimer = () => {
    var dateEvent = document.getElementById('dateEvent').value,
        nowDay = new Date()
        newYear = new Date(dateEvent).getTime()
    const nameEvent = document.getElementById('nameEvent').value

    clearInterval(startTime)

    let calcTime = (date) => {
        var now = new Date().getTime()
        var distance = date - now

        var days = Math.floor(distance / 1000 / 60 / 60 / 24)
        var hours = Math.floor(distance / 1000 / 60 / 60) % 24
        var minutes = Math.floor(distance / 1000 / 60) % 60
        var seconds = Math.floor(distance / 1000) % 60

        document.querySelector('.dias').innerHTML = days
        document.querySelector('.hrs').innerHTML = hours
        document.querySelector('.min').innerHTML = minutes
        document.querySelector('.seg').innerHTML = seconds

        if (nowDay >= date) {
            clearInterval(startTime)
            alert('Data Invalida')
            document.querySelector('.dias').innerHTML = 'T'
            document.querySelector('.hrs').innerHTML = 'I'
            document.querySelector('.min').innerHTML = 'M'
            document.querySelector('.seg').innerHTML = 'E'
        }
    }
    let eventName = () => {
        if (nameEvent === '') {
            clearInterval(startTime)
            alert('Nome do evento está vazio')
        } else {
            document.getElementById('titulo').innerHTML = nameEvent
        }
    }
   var startTime = setInterval(() => calcTime(newYear), 1000)
   eventName()
}




