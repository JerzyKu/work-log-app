const active_jobs = []

const start_button = document.querySelector('.btn-start')

start_button.addEventListener("click", () => {

    const company = document.querySelector('#primary').value
    const task = document.querySelector('#secondary').value
    const description = document.querySelector('#textarea_description').value
    const start_date = new Date()
    const start_sec = start_date.getSeconds()
    const start_min = start_date.getMinutes()
    const start_hour = start_date.getHours()

    const task_id = start_date.getTime()

    newDiv = document.createElement("div");
    newDiv.id = 'm' + task_id

    let newEle = document.createElement("span")
    newEle.innerText = company
    newDiv.append(newEle)

    newEle = document.createElement("span")
    newEle.innerText = task
    newDiv.append(newEle)

    newEle = document.createElement("span")
    newEle.innerText = description!='' ? description : "Empty"
    newDiv.append(newEle)

    newEle = document.createElement("span")
    newEle.innerText = start_date.getDate()
    newDiv.append(newEle)

    newDiv.append(document.createElement("br"))

    newEle = document.createElement("span")
    newEle.innerText = `${start_hour<10?'0':''}${start_hour}:${start_min<10?'0':''}${start_min}:${start_sec<10?'0':''}${start_sec}`
    newDiv.append(newEle)

    newEle = document.createElement("button")
    newEle.innerText = 'Stop'
    newEle.addEventListener('click', () => {
        document.querySelector('#m'+task_id).remove()
    })
    newDiv.append(newEle)

    newDiv.append(document.createElement("br"))

    document.querySelector('.active-works').append(newDiv)

})