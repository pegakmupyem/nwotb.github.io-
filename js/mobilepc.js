    function detect() {
      var isMobile = window.orientation > -1;
      //alert(isMobile ? 'Mobile' : 'PC');
	var gettext = isMobile ? 'Mobile' : 'PC'
	//alert('text' + gettext);
	if (gettext == 'Mobile') { 
		alert('мобила');
        } else { 
		alert('комп');
      }
    }
    detect()
