const settings = {
    'company-A': ['task-A-A','task-A-B','task-A-C'],
    'company-B': ['task-B-A','task-B-B','task-B-C'],
    'company-C': ['task-C-A'],
    'company-D': []
}

const company = document.querySelector('#primary')
const tasks = document.querySelector('#secondary')

Object.keys(settings).forEach( e => {
    console.log(e);
})

