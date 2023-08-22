document.getElementById('btn-sub').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    if(email === 'rifat10@gmail.com' && password === 'rifat'){
        window.location.href = 'js/Bank.html'
    }

    else{
       alert ('Invalid User')
    }

})