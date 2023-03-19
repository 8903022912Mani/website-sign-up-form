function submit(){

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirm = document.getElementById('confirm-password').value;

  if (!username || !email || !password || !confirm) {
    alert('Please fill out all fields.');
    return;
  }
  else if (password.length < 8){
    alert('Password at least minimum 8 characters')
  }

  else if (password !==confirm){
    alert('password and confirm password not the same')
  }
  else {
    alert('Sign up successful!');
  }
 
};
