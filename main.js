document.getElementById("button").addEventListener("click", ()=>{

fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json()) 
    .then(res => {
console.log(res);
document.getElementById('to-do').textContent = res.activity
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
  })
