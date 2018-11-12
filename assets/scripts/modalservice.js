let modalService = {}
modalService.modalis = $('.js-modal');
modalService.modals = {
	base: '<div class="modal -open">\
		<div class="modal__bg "></div>\
		<div class="modal__body js-modal card"></div>\
		</div>',
	newUser: '<h4 class="modal__title">Create user</h4>\
			<form class="form-auth">\
					<div class="row">\
						<fieldset class="input js-authParent">\
							<label for="UserName">Name</label>\
							<div class="input__container">\
								<input 	id="UserName" \
										type="text" \
										class="input__field js-newUserName"\
										autocomplete="off">\
							</div>\
							<div class="input__error">\
								<span>No Such User</span>\
							</div>\
						</fieldset>\
						<fieldset class="input js-authParent">\
							<label for="UserAge">Age</label>\
							<div class="input__container">\
								<input 	id="UserAge" \
										type="text"\
										class="input__field js-newUserAge"\
										autocomplete="off">\
							</div>\
							<div class="input__error">\
								<span>No Such User</span>\
							</div>\
						</fieldset>\
					</div>\
					<fieldset class="input js-authParent">\
						<label for="UserType">Type</label>\
						<div class="input__container">\
							<input 	id="UserType" \
									type="text"\
									class="input__field js-newUserType  -with-btn"\
									autocomplete="off">\
							<div class="input__btn js-newUserBtn">></div>\
						</div>\
						<div class="input__error">\
							<span>No Such User</span>\
						</div>\
					</fieldset>\
				</form>'

};

modalService.openModal = function(modal) {
	$('.js-modal').html(modalService.modals[modal]);

};




