// Build a passenger Counter app
 let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-entries")
let welcome_1 = document.getElementById("welcome-el")

 function increment(){
    count++
    countEl.innerText = count
}

function save(){
    let entries = count + " - "
    saveEl.innerText += entries
    count = 0
    countEl.innerText = 0
    console.log(count)
}

let welcome = "Hi welcome back to my channel."
welcome_1.innerText = welcome


