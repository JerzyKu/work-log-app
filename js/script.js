setInterval(setClocks,1000)

function setClocks() {
    const targets = document.querySelectorAll('.current_time')
    const currentDate = new Date()
    const sec = currentDate.getSeconds()
    const min = currentDate.getMinutes()
    const hour = currentDate.getHours()

    targets.forEach(e => {
        e.innerHTML = `${hour<10?'0':''}${hour}:${min<10?'0':''}${min}:${sec<10?'0':''}${sec}`
    });


    // console.log(`${hour} : ${min} : ${sec}`);
}

setClocks()