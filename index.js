const $password = document.getElementById('password');
const $confirmPassword = document.getElementById('password_confirmation');
const regexForValidPassword = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
let $span = document.querySelector('.help-text');

function validPassword(){
  if($password.value || $confirmPassword.value){
    return false;
  }else{
    return true;
  }
}

function matchingPassword() {
  if($password.value == $confirmPassword.value){
    $span.style.display = 'none';
  }else{
    $span.style.display = 'block';
  }
}

$password.addEventListener('keyup', () => matchingPassword())
$confirmPassword.addEventListener('keyup', () => matchingPassword())