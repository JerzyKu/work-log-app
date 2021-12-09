const active_jobs = []

const start_button = document.querySelector('.btn-start')

start_button.addEventListener("click", () => {

    const company = document.querySelector('#primary').value
    const task = document.querySelector('#secondary').value
    var description = document.querySelector('#textarea_description').value
    if (description == '') description = ' - - - '
    const start_date = new Date()

    const task_id = start_date.getTime()

    // Get a reference to the table
    let tableRef = document.getElementById('done-work-table');

    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(01);
    newRow.id = `m${task_id}`; // idk why need to add semicoma 


    [company, task, description, generate_clock_string(start_date), 'test'].forEach((e, index) => {
        console.log(e, index)
        newCell = newRow.insertCell(index);
        newText = document.createTextNode(`${e}`);
        newCell.appendChild(newText);
    })

    newCell = newRow.insertCell(-1)
    new_ele = document.createElement('button')
    new_ele.innerText = 'stop'
    new_ele.addEventListener('click', () => {
        tableRef.deleteRow(`m${task_id}`);
    })
    
    newCell.appendChild(new_ele);

    // newEle = document.createElement("button")
    // newEle.innerText = 'Stop'
    // newEle.addEventListener('click', () => {
    //     alert('TO OD !!!')
    // })
    // newDiv.append(newEle)





    // newDiv = document.createElement("div");
    // newDiv.id = 'm' + task_id

    // let newEle = document.createElement("span")
    // newEle.innerText = company
    // newDiv.append(newEle)

    // newEle = document.createElement("span")
    // newEle.innerText = task
    // newDiv.append(newEle)

    // newEle = document.createElement("span")
    // newEle.innerText = description != '' ? description : "Empty"
    // newDiv.append(newEle)

    // newEle = document.createElement("span")
    // newEle.innerText = start_date.getDate()
    // newDiv.append(newEle)

    // newDiv.append(document.createElement("br"))

    // newEle = document.createElement("span")
    // newEle.innerText = `${start_hour < 10 ? '0' : ''}${start_hour}:${start_min < 10 ? '0' : ''}${start_min}:${start_sec < 10 ? '0' : ''}${start_sec}`
    // newDiv.append(newEle)

    // newEle = document.createElement("button")
    // newEle.innerText = 'Stop'
    // newEle.addEventListener('click', () => {
    //     document.querySelector('#m' + task_id).remove()
    // })
    // newDiv.append(newEle)

    // newDiv.append(document.createElement("br"))

    // document.querySelector('.active-works').append(newDiv)

})

const test_button = document.querySelector('#test-button')

test_button.addEventListener('click', () => {
    add_activ_row(task)
})


let now = new Date()
let task = {
    'worker_id': 0,
    'time_start': new Date(),
    'time_stop': new Date(),
    'pauses': [
        {
            'pause_start': new Date(),
            'pause_stop': new Date()
        }
    ],
    'description': 'bla bal bal',
    'company': 'company',
    'task': 'task',
    'task_id': now.getTime()

}

function add_activ_row(task) {
    // Get a reference to the table
    let tableRef = document.getElementById('done-work-table');

    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(01);

    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);


    // Append a text node to the cell
    let newText = document.createTextNode(`${task.company}`);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(1);
    newText = document.createTextNode(`${task.task}`);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(2);
    newText = document.createTextNode(`${task.description}`);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(3);
    newText = document.createTextNode(generate_clock_string(task.time_start));
    newCell.appendChild(newText);

    newCell = newRow.insertCell(4);
    newText = document.createTextNode(generate_clock_string(task.time_stop));
    newCell.appendChild(newText);

    sleep(1)
    now = new Date()
    t = now.getTime()
    newCell = newRow.insertCell(5);
    newText = document.createTextNode(`${t}`);
    newCell.appendChild(newText);

}

add_activ_row(task)
add_activ_row(task)
add_activ_row(task)
add_activ_row(task)

function generate_clock_string(date) {
    const s = date.getSeconds()
    const m = date.getMinutes()
    const h = date.getHours()
    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}