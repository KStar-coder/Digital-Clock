const clock = document.querySelector('#clock')



// new method to run continuously within an interval
setInterval(function () {
    let date = new Date()
    // running it in console to test it
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000) // it will run after every 1000 ms i.e 1 sec