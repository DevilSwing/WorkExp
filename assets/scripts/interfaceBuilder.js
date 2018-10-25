
let interfaceBuilder = {};

interfaceBuilder.parent = $('.js-mainParent');
interfaceBuilder.interfaces = {
	login: '<div class="auth-panel">\
			<h1>CyberBanana Labs</h1>\
			<div class="card">\
				<form class="form-auth">\
					<fieldset class="input js-authParent">\
						<label for="UserPass">Insert User Pass</label>\
						<div class="input__container">\
							<input 	id="UserPass" \
									type="text" \
									class="input__field js-authInput -with-btn"\
									autocomplete="off">\
							<div class="input__btn js-newUserBtn">></div>\
						</div>\
						<div class="input__error">\
							<span>No Such User</span>\
						</div>\
					</fieldset>\
				</form>\
			</div>\
		</div>',
	base: '<div class="panel">\
			<div  class="card">\
				<div class="card__header js-cardHeader">\
					<h2></h2>\
				</div>\
				<div class="card__body js-cardBody">\
				</div>\
			</div>\
				</div>'	


};

interfaceBuilder.build = function(interface) {
 interfaceBuilder.parent.html(interfaceBuilder.interfaces[interface]);
};

interfaceBuilder.prepareUserList = function(userList){
	let result = '<div class="user-list">';

	userList.forEach(function(user) {

		result += '<div class="user-list__item card">\
							<div class="user-list__avatar" style="background-image: url(' + user.img + ')">\
							</div>\
							<div class="user-list__info">\
								<p class="user-list__type">' + user.type + '</p>\
								<p class="user-list__name">' + user.name + '</p>\
								<p class="user-list__id">ID: <span>' + user.id + '</span></p>\
							</div>\
						</div>';
						
						
	});
	
	return result + '</div>' + '<div class="add card js-addBtn ">\
								<div class="stick r"></div>\
								<div class="stick l"></div>	\
							</div>';
}


interfaceBuilder.showMessage = function (message) {
	interfaceBuilder.hideCurrent();
	setTimeout(function() {
		interfaceBuilder.parent.html('<h1>' + message + '</h1>');
	}, 1000);	
	
};
interfaceBuilder.hideCurrent =  function() {
	interfaceBuilder.parent.find('div').fadeOut(1000);

};


interfaceBuilder.buildAdminInterface = function(userList) {
	interfaceBuilder.build('base');
	interfaceBuilder.parent.find('.js-cardHeader h2').text('Admin Interface');
	interfaceBuilder.parent.find('.js-cardBody').html(interfaceBuilder.prepareUserList(userList));
}
