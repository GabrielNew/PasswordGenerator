let passwordLenghtRange = 8

const generatePassword = () =>
{
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"
    let password = ""

    for(let i=0; i<passwordLenghtRange; i++)
    {
        const randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber+1)
    }

    const passwordInput = document.querySelector("#password")
    passwordInput.value = password;
}
const passwordLenghtRangeEl = document.querySelector('#password-length')

passwordLenghtRangeEl.addEventListener('input', function() {
    passwordLenghtRange = passwordLenghtRangeEl.value
    generatePassword()
})

generatePassword()
