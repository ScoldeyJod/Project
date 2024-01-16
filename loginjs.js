		function validation() {
			
		var userid = "yash"
		var password = "yash2201"
		var usid = login_form.userid.value;
		var paswrd = login_form.pwd.value;

		if ((usid == "")&& (paswrd == "")) {
			document.getElementById('err_msg').innerHTML= "Please Enter User ID and Password"
		} 
		else if ((userid == usid)&& (password == paswrd)) {
			window.open('homepage.html')
		}
		else{
			document.getElementById('err_msg').innerHTML= "UserID and Password is Incorrect"

		}
	}
