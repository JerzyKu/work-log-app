const settings = {
    "company-A": ["task-A-A", "task-A-B", "task-A-C"],
    "company-B": ["task-B-A", "task-B-B", "task-B-C"],
    "company-C": ["task-C-A"],
    "company-D": null
}

// settings = JSON.parse(settings) // shame u stupid 

const company = document.querySelector('#primary')
const tasks = document.querySelector('#secondary')

const create_option_element = (e) => {
    new_ele = document.createElement('option')
    new_ele.value = e
    new_ele.innerText = e
    return new_ele
}

Object.keys(settings).forEach(e => {
    company.append(create_option_element(e))
})

settings[company.value].forEach( e => {
    tasks.append(create_option_element(e))
})

company.addEventListener('change', () => {
    key = company.value
    tasks.innerHTML = ''
    console.log(settings[key]);
    if (settings[key] === null) {
        tasks.append(create_option_element(' - - - '))
        console.log('---');
        return
    }
    settings[key].forEach(e => {
        tasks.append(create_option_element(e))
    })
})

