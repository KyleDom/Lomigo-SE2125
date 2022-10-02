const postLoad = () => {
    console.log("Hello World!")

    const loginBtn = document.querySelector('#btn');
    loginBtn.onclick = () => {
        const usernameTxt = document.getElementById('username').value
        const passwordTxt = document.getElementById('password').value

        if(usernameTxt == ''){
            alert('Please enter username')
            return
        }
        else if (usernameTxt.length < 3){
            alert('Username should atleast contain three (3) characters')
            return
        }
        if(passwordTxt == ''){
            alert('Please enter password')
            return
        }
        else if(passwordTxt.length < 3){
            alert('Password should atleast contain three(3) characters')
            return
        }
        if(usernameTxt === 'admin' && passwordTxt === 'root'){
            location.href = "home.html";
        }else {
            alert('Access denied!')
        }
        console.log("You pressed me!", usernameTxt)
    }

}
window.onload = postLoad

