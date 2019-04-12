// jQuery старт
$(document).ready(function(){

	$(function() {

		if( $("[name='phone']").length ) {
			$('#phone').mask('8 (999) 999-99 99')
		}

		if ( $('.form').length ) { // если на странице найдены элементы с классом .form

			$('.form').each(function() { // .each(метод или функция) - перебор элементов объекта jQuery.
				var form 	= $(this),
						btn 	= form.find('.input-submit'),
						error = {
							fName: 'укажите имя',
							lName: 'укажите фамилию',
							mName: 'укажите отчество',
							phone: 'укажите телефон',
							email: 'укажите адрес эл. почты'	
						};

				form.find('.input-field').each(function() {
					if( $("[name='phone']").length ) {
						if( ($(this).val().indexOf('_') != -1) || $(this).val() == '' ) {
							$(this).addClass('empty');
						}
					}

				});

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