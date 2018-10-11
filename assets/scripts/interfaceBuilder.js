
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
									class="input__field js-authInput"\
									autocomplete="off">\
							<div class="input__btn js-authBtn">></div>\
						</div>\
						<div class="input__error">\
							<span>No Such User</span>\
						</div>\
					</fieldset>\
				</form>\
			</div>\
		</div>'
};

interfaceBuilder.build = function(interface) {
 interfaceBuilder.parent.html(interfaceBuilder.interfaces[interface]);
};

interfaceBuilder.showMessage = function (message) {
	interfaceBuilder.hideCurrent();
	setTimeout(function() {
		interfaceBuilder.parent.html('<h1>' + message + '</h1>');
	}, 1000);	
	
};
interfaceBuilder.hideCurrent =  function() {
	interfaceBuilder.parent.find('div').fadeOut(1000);

};

