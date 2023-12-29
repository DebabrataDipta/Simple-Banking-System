document.getElementById('user-btn').addEventListener('click',function(){
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    userEmailField.value = '';
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    userPasswordField.value='';

    if(userEmail ==='debabratadash93@gmail.com' && userPassword === 'Debabrata1998'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid Username or Password!!!');
    }
})