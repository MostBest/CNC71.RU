// jQuery старт
$(document).ready(function(){

	$(function() {

		if( $("[name='phone']").length ) {
			$('#phone').mask('8 (999) 999-99 99')
		}

		if ( $('.form').length ) { // если на странице найдены элементы с классом .form

			$('.form').each(function() { // .each(метод или функция) - перебор элементов объекта jQuery.
				var form 	= $(this),
						btn 	= form.find('.input-submit')
						error = {
							fName: '',
							lName: '',
							mName: '',
							phone: '',
							email: ''	
						};

				form.find('.')

				btn.click(function() {
					if( $(this).hasClass('disabled') ) {
						
						return false
					} else {
						form.submit();
					}
				});
			});

		}
	});

});
// jQuery конец