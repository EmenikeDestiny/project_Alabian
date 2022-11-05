const output = document.getElementById('output')

let usersMe = JSON.parse(localStorage.getItem("users"))
output.innerHTML = usersMe.fullname
