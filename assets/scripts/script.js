
$(document).ready(function () { 
// 1 Этап - Опрделить пул глобальных переменных 

let currentUser = null; 
let userLoggedIn = false; 

let newUserName = null; 
let newUserId = null; 

let userPost = null; 
let userList = [ 
{ 
		password: 7589, 
		type: 'Админ', 
		name: 'Captain', 
		age: 16 
}, 
{ 
		password: 3589, 
		type: 'Юзер', 
		name: 'Жорик', 
		age: 17 
}, 
{ 
		password: '0589', 
		type: 'Хакер', 
		name: 'Милая Моя Читерюшко', 
		age: undefined 
} 
]; 

// 2 Этап - 

// interfaceBuilder.build('login');

$('.js-authBtn').click(function() {
	checkPass($('.js-authInput').val());
});


 $('.js-authInput').focus(function() {
	$('.js-authParent').removeClass('-error');
});
$(".form-auth").on("submit", function(e){
	e.preventDefault();
	checkPass($('.js-authInput').val());
});


function checkPass(userPassword) { 
	for (let i = 0; i < userList.length; i++) { 
		if (userPassword == userList[i].password) { 
			userLoggedIn = true; 
			currentUser = userList[i]; 
		} 
	} 

	if (!userLoggedIn) { 
		$('.js-authParent').addClass('-error');
	} else { 
	 	interfaceBuilder.showMessage('Welcome on board, ' + currentUser.name);
	} 
} 


function downloadTheInternet() { 
	confirm('Скачать интернет?') 
} 

});