function toHHMM(date) {
    // const s = date.getSeconds()
    const m = date.getMinutes()
    const h = date.getHours()
    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}`
}