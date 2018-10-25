
$(document).ready(function () { 
// 1 Этап - Опрделить пул глобальных переменных 

let currentUser = null; 
let userLoggedIn = false; 

let newUserName = null; 
let newUserId = null; 

let userPost = null; 
let userList = [ 
{ 
		img: 'https://cs9.pikabu.ru/post_img/2017/10/04/8/1507120937175937484.png',	
		id: 7589, 
		type: 'Админ', 
		name: 'Captain', 
		age: 16 
}, 
{ 
		img: 'https://i.pinimg.com/originals/be/98/87/be9887459481a3c313c2973a8c3700d4.jpg',
		id: 3589, 
		type: 'Юзер', 
		name: 'Жорик', 
		age: 17 
}, 
{ 
		img: 'https://www.themanime.org/images/screens/overlord08.JPG',
		id: '0589', 
		type: 'Хакер', 
		name: 'Милая', 
		age: undefined 
} 
]; 





// 2 Этап - 


 interfaceBuilder.buildAdminInterface(userList);


 $('.js-addBtn').click(function(){
	$('.modal').add('-open');
	$('body').append(modalService.modals.base);
	modalService.openModal('newUser');
});

 $('body').on('click', '.modal__bg', function(){
	$('.modal').removeClass('-open');
});



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

	userList.forEach(function(user){
		if (userPassword == user.id) { 
			userLoggedIn = true; 
			currentUser = user;
		} 
	});
	

	if (!userLoggedIn) { 
		$('.js-authParent').addClass('-error');
	} else { 
	 	interfaceBuilder.showMessage('Welcome on board, ' + currentUser.name);
	} 
} 


function downloadTheInternet() { 
	confirm('Скачать интернет?') 
}



// $('body').append(modalService.modals.base);
// modalService.openModal('newUser');





});


