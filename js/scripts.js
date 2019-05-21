
// HW1
(function() {
	'use strict';
	let login = prompt("Enter login");
	if (login == "Admin") {
		let password = prompt("Enter password");
		if (password=="Black Lord"){
			alert("Welcome my Lord!");
		} else if (password==null) {
			alert("Login canceled");
		} else {
            alert("Password is wrong!");
		}
	} else if (login == null) {
		alert("Login canceled");
	} else {
		alert ("I don`t now who your are !");
	}
})();


