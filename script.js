let passwordLenghtRange = 8
const passwordInput = document.querySelector("#password")

const generatePassword = () =>
{
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"
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

document.querySelector('#copy-1').addEventListener('click', copyPassword)
document.querySelector('#copy-2').addEventListener('click', copyPassword)

generatePassword()
