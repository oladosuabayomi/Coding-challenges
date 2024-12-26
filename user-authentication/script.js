const usernameKey = 'oladosuabayomi';
const passwordKey = 12345;

document.querySelector('.check').addEventListener('click', function () {
    const username = document.querySelector('.username').value;
    const password = Number(document.querySelector('.password').value);

    /* console.log(username, password); */

    if (!username || !password) {
        document.querySelector('.instuction').style.color = 'red';
        document.querySelector('.instuction').textContent = 'Answer all fields to continue!';
    } else if (username === usernameKey && password === passwordKey) {
        document.querySelector('.verification').style.display = 'none';
        document.querySelector('.sucess-message').style.display = 'block';
    } else {
        document.querySelector('.instuction').style.color = 'red';
        document.querySelector('.instuction').textContent = 'Incorrect details. Please try again!';
    }
});