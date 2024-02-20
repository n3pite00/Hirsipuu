setInterval(() => {
    const time = new Date()
    document.querySelector('p').innerHTML = time.toLocaleTimeString()
},1000)