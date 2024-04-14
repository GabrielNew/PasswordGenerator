let passwordLenghtRange = 8
const passwordInput = document.querySelector("#password")
const upperCaseCheck = document.querySelector("#uppercase-check")
const symbolsCheck = document.querySelector("#symbol-check")
const numbersCheck = document.querySelector("#numbers-check")

const generatePassword = () =>
{
    let chars = "abcdefghjkmnpqrstuvwxyz"

    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numberChars = "123456789"
    const symbolChars = "?!@&*()[]"

    if(upperCaseCheck.checked)
        chars += upperCaseChars

    if(symbolsCheck.checked)
        chars += symbolChars

    if(numbersCheck.checked)
        chars += numberChars

    let password = ""

    for(let i=0; i<passwordLenghtRange; i++)
    {
        const randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber+1)
    }
    passwordInput.value = password;
}

const copyPassword = () => 
{
    navigator.clipboard.writeText(passwordInput.value)
}

const passwordLenghtRangeEl = document.querySelector('#password-length')

passwordLenghtRangeEl.addEventListener('input', function() {
    passwordLenghtRange = passwordLenghtRangeEl.value
    generatePassword()
})

upperCaseCheck.addEventListener('click', generatePassword)
numbersCheck.addEventListener('click', generatePassword)
symbolsCheck.addEventListener('click', generatePassword)

document.querySelector('#copy-1').addEventListener('click', copyPassword)
document.querySelector('#copy-2').addEventListener('click', copyPassword)


generatePassword()
