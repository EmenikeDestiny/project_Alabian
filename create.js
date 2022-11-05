// Select the ids
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const myForm = document.getElementById('myForm')

// Add event listener
myForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(fullname.value);

    let user = {
        fullname: fullname.value,
        email: email.value,
        password: password.value,
    }
    localStorage.setItem("users", JSON.stringify(user))
})