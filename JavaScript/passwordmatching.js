function checkPass() {
	if (document.getElementById('password').value != document.getElementById('confirmpassword').value) {
	  document.getElementById('message').style.color = 'red';
	  document.getElementById('message').innerHTML = 'The passwords don\'t match';
	} else {
        document.getElementById('message').innerHTML = '';
    };
};