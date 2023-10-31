let inp = document.querySelector(`input`)
let btn = document.querySelector(`button`)
inp.nextElementSibling.style.display = `none`
btn.addEventListener(`click`, () => {
    if (!(/\w+@\w+\.\w/ig.test(inp.value)) || ((/\s/i.test(inp.value))) || inp.value == ``) {
        console.log(1)
        inp.nextElementSibling.style.display = `block`
        inp.style.borderColor = `red`
    } else {
        inp.nextElementSibling.style.display = `none`
        inp.style.borderColor = `green`
    }
})

window.onload = () => {
    let logo = document.querySelector(`.logo`)
    let h1 = document.querySelector("h1")
    let Subscribe = document.querySelector(".Subscribe")
    let Notify = document.querySelector(".Notify")
    let dashboard = document.querySelector(".dashboard")
    let social = document.querySelector(".social")
    let copy = document.querySelector(".copy")
    let attribution = document.querySelector(".attribution")

    attribution.style.opacity = `1`
    dashboard.style.opacity = `1`
    copy.style.opacity = `1`
    logo.style.opacity = `1`
    Notify.style.opacity = `1`
    h1.style.opacity = `1`
    Subscribe.style.opacity = `1`
    social.style.opacity = `1`
}