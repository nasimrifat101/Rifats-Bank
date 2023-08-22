document.getElementById('btn-sub').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    if(email === 'Nasimrifat10@gmail.com' && password === 'Rifat@027744654'){
        window.location.href = 'js/Bank.html'
    }

    else{
       alert ('Invalid User')
    }

})