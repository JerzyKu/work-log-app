document.querySelector('#last-month-btn').addEventListener('click', () => {
    const endedBefore = document.querySelector('#endedBefore')
    const endedAfter = document.querySelector('#endedAfter')

    let thisMonthFirstDay = new Date(new Date().setDate(1))
    let lastDayPrevMont = thisMonthFirstDay.setDate(thisMonthFirstDay.getDate() - 1)
    let firstDayPrevMont = new Date(lastDayPrevMont).setDate(1)

    endedBefore.value = new Date(lastDayPrevMont).toISOString().split('T')[0]
    endedAfter.value = new Date(firstDayPrevMont).toISOString().split('T')[0]
})