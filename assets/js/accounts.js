function toggle_password(){
    const element = document.getElementById('password');
    if (element.type === 'password'){
        element.type = 'text';
        
    }

    else{
        element.type = 'password';
    }


    const element1 = document.getElementById('password1');
    if (element1.type === 'password'){
        element1.type = 'text';
        
    }

    else{
        element1.type = 'password';
    }


}

