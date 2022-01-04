const form = document.querySelector("#form")
const inputError = document.querySelector("#error")
const inputEmail = document.querySelector("#email")

form.onsubmit = function (event){ 
    event.preventDefault( )
    if (document.forms[0],inputEmail.value == 0){
        inputEmail.classList.add('hidden')
        inputEmail.classList.remove('input1')
        inputError.innerHTML = 'please, type your email'
    } else {
        inputEmail.classList.remove('hidden')
        inputEmail.classList.add('input1')
        inputError.innerHTML = ''
    }
}

function checarEmail(){
    if (document.forms[0],inputEmail.value.indexOf('@') == -1 || document.forms[0],inputEmail.value.indexOf('.') == -1 ){
        inputEmail.classList.add('hidden')
        inputEmail.classList.remove('input1')
        inputError.innerHTML = 'Please provide a valid email' 
	} else {
        inputEmail.classList.remove('hidden')
        inputEmail.classList.add('input1')
        inputError.innerHTML = ''
    }
}