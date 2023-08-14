
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
 for(tablinks of tablinks){
     tablinks.classList.remove("active-link")
 }
 for(tabcontents of tabcontents){
     tabcontents.classList.remove("active-tab")
 }
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab");
}

let sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbybGTmgXs428M5XHU4owFNc7dTlTdypawb_8B7OHWQk5V_WcYSP0ZcB_28eS5hs7wHg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent sucessfully"
        setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
})