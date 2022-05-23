function checkSafari(runlink, downloadlink) {
	if ( navigator.userAgent.indexOf('Windows')>=0 ) {
		// Открываем маленькое окошко с нашим не стандартным URL
		var w = window.open($(runlink).attr('href'), '', 'width=50, height=50');
		setTimeout(function(){
			try {
				// Пытаемся поработать с не определенным атрибутом окна
				if ( w.location!='about:blank' ) {}
				w.close();
				 window.focus();
			}
			catch (e) {
				w.close();
				window.focus();
				downloadConfirmation(downloadlink);
			}
		}, 1000);
	}
	else {
		// Под MacOS и теоретически под iOS
		document.location = $(runlink).attr('href');
		setTimeout(function(){
			// Если окно по-прежнему в фокусе, значит приложение не запустилось
			if ( window.isFocused ) downloadConfirmation(downloadlink);
		}, 1000);
	}
}

// Обработчики событий получения и потери фокуса окна браузера
window.isFocused = true;
$(window).on('focus', function(){
	window.isFocused = true;
})
.on('blur', function(){
	window.isFocused = false;
});
