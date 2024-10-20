const form=document.getElementById('sign-up-form');


    const showPasswordCheckbox = document.getElementById('show-password');
const password = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        password.setAttribute('type', 'text'); 
    } else {
        password.setAttribute('type', 'password'); 
    }
});

    const firstName = document.getElementById('first-name');
    const firstNameError = document.getElementById('fname-error');
    const lastName = document.getElementById('last-name');
    const lastNameError = document.getElementById('lname-error');
    const username = document.getElementById('username');
    const userNameError = document.getElementById('username-error');
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    // const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    const confirmPassword = document.getElementById('cnfrm-password');
    const cnfrmPasswordError = document.getElementById('cnfrmpassword-error');

    // Print values to the console
    // console.log('First Name:', firstName);
    // console.log('Last Name:', lastName);
    // console.log('Username:', username);
    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log('Confirm Password:', confirmPassword);


// });

function handleSubmit(event){
    event.preventDefault();

    if(firstName.value.length==0){
        firstNameError.innerText="First name is required";
    }
    if(lastName.value.length==0){
        lastNameError.innerText="Last name is required";
    }
    if(username.value.length==0){
        userNameError.innerText="Username is required";
    }
    if(username.value.toLowerCase()=="username"){
        userNameError.innerText="Username can't be taken";
    }
    else if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
        userNameError.innerText = "Username must be alphanumeric";
    }
    else if (username.value.length <= 5) {
        userNameError.innerText = "Username must be more than 5 characters";
    } else if (username.value.length > 12) {
        userNameError.innerText = "Username must be 12 characters or fewer";
    }
    if(email.value.length==0){
        emailError.innerText="Email is required";
    }
    else if(!email.value.includes('@')){
        emailError.innerText="Email should contain @"
    }
    if (password.value.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters long";
    } 
    else if (!/[A-Z]/.test(password.value)) {
        passwordError.innerText = "Password must contain at least one uppercase letter";
    } 
    else if (!/[a-z]/.test(password.value)) {
        passwordError.innerText = "Password must contain at least one lowercase letter";
    } 
    else if (!/[0-9]/.test(password.value)) {
        passwordError.innerText = "Password must contain at least one number";
    } 
    else if (!/[!@#$%^&*]/.test(password.value)) {
        passwordError.innerText = "Password must contain at least one special character (e.g., !@#$%^&*)";
    }
    if(confirmPassword.value!=password.value){
        cnfrmPasswordError.innerText="Passwords do not match";
    }

}

form.addEventListener('submit', handleSubmit);