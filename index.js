const $password = document.getElementById('password');
const $confirmPassword = document.getElementById('password_confirmation');

function matchingPassword() {
  if($password.value == $confirmPassword.value){
    alert('All Good my dude')
  }else{
    console.log('This seemes fishy...')
  }
}

$password.addEventListener('keyup', () => matchingPassword())
$confirmPassword.addEventListener('keyup', () => matchingPassword())